'use client';
import { memo, useRef, useEffect, useState, useCallback } from 'react';
import ComfyJS from 'comfy.js';
import { useProgress } from '../ProgressProvider';
import { useChatCommands } from '../../hooks/useChatCommands';
import { getChatCommands } from '../../utils/chatCommands';
import { useTwitchConnection } from './TwitchConnectionContext';

// Static identifier to track active connections across re-renders
let activeConnectionId: string | null = null;
// Track connection attempts to implement exponential backoff
let connectionAttempts = 0;
// Maximum number of rapid reconnect attempts before entering backoff mode
const MAX_RAPID_RECONNECTS = 3;
// Maximum backoff time in milliseconds (2 minutes)
const MAX_BACKOFF_MS = 120000;

// Debounce flag for connection attempts to prevent overly rapid cycles
let connectionDebounceTimeout: NodeJS.Timeout | null = null;
const CONNECTION_DEBOUNCE_MS = 500; // Increased debounce slightly

export const TwitchChatMonitor = memo(function TwitchChatMonitor() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { isTwitchConnected, twitchChannel } = useProgress();
    const [twitchToken, setTwitchToken] = useState<string>('');
    const handlers = useChatCommands();
    const handlersRef = useRef(handlers);
    const { setConnectionStatus } = useTwitchConnection();
    const connectionIdRef = useRef<string | null>(null);
    const lastErrorTimeRef = useRef<number>(0);
    const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isMountedRef = useRef(false); // Track mount status
    const isInitialEffectRunRef = useRef(true);

    useEffect(() => {
        isMountedRef.current = true;
        // On unmount, ensure any active connection is cleaned up
        const currentActiveId = activeConnectionId; // Capture ID at the time of mount effect setup
        return () => {
            console.log("TwitchChatMonitor unmounting...");
            isMountedRef.current = false;
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
            if (connectionDebounceTimeout) {
                clearTimeout(connectionDebounceTimeout);
            }
            // Attempt to disconnect the connection that might have been active
            // when the component unmounted.
            if (currentActiveId && activeConnectionId === currentActiveId) {
                safeDisconnect(currentActiveId, 'unmount');
            } else if (activeConnectionId) {
                // If the active ID changed between mount and unmount, try cleaning that one too
                safeDisconnect(activeConnectionId, 'unmount-fallback');
            }
        };
        // safeDisconnect should not be a dependency here, it's called imperatively on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Keep the handlers ref updated with the latest handlers
    useEffect(() => {
        handlersRef.current = handlers;
    }, [handlers]);

    // Load token from session storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('twitchToken');
            if (token) {
                setTwitchToken(token);
            }
        }
    }, []);

    // Function to perform a safe disconnect - MEMOIZED with useCallback
    // This function now focuses *only* on calling ComfyJS.Disconnect if needed.
    // Status updates are handled elsewhere to avoid dependency loops.
    const safeDisconnect = useCallback((id: string, reason: string = 'unknown') => {
        // Only disconnect if this ID is currently marked as the active one
        if (activeConnectionId === id) {
            console.log(`Disconnecting ${id} (reason: ${reason})`);
            const idBeingDisconnected = activeConnectionId;
            activeConnectionId = null; // Clear active ID *before* attempting disconnect
            try {
                // Check if ComfyJS and Disconnect exist before calling
                // This check might be insufficient if ComfyJS internal state is null
                if (ComfyJS && typeof ComfyJS.Disconnect === 'function') {
                    ComfyJS.Disconnect();
                    console.log(`ComfyJS.Disconnect called for ${idBeingDisconnected}`);
                } else {
                    console.warn(`ComfyJS.Disconnect not available or not a function during disconnect for ${idBeingDisconnected}`);
                }
            } catch (e) {
                // Catch errors, e.g., if called when already disconnected or internal state is bad
                // The "Cannot read properties of null (reading 'disconnect')" error likely originates inside ComfyJS.Disconnect
                console.warn(`Caught error during ComfyJS.Disconnect() for ${idBeingDisconnected} (reason: ${reason}, likely benign): ${e || e}`);
            }
            // DO NOT set connection status here to avoid loops. Status is set by the effect/callbacks.
        } else {
            // Log if disconnect was called for an ID that is no longer active
            // console.log(`Skipping disconnect for inactive ID: ${id} (active: ${activeConnectionId}, reason: ${reason})`);
        }
    }, []); // No dependencies needed here if it only calls external lib + manages static var

    // Function to handle backoff strategy for reconnections
    const getBackoffDelay = () => {
        if (connectionAttempts <= MAX_RAPID_RECONNECTS) {
            // Slightly longer base delay
            return 1500;
        }

        // Exponential backoff with jitter
        const backoffBase = Math.min(5000 * Math.pow(1.5, connectionAttempts - MAX_RAPID_RECONNECTS), MAX_BACKOFF_MS);
        const jitter = Math.random() * 0.3 * backoffBase;
        const delay = Math.round(backoffBase + jitter);
        console.log(`Backoff active: Reconnecting in ${Math.round(delay / 1000)} seconds... (Attempt ${connectionAttempts + 1})`);
        return delay;
    };

    // Main connection effect
    useEffect(() => {
        // Clear any existing debounce timeout on dependency change
        if (connectionDebounceTimeout) {
            clearTimeout(connectionDebounceTimeout);
            connectionDebounceTimeout = null;
        }

        // Generate a unique connection ID for this potential connection attempt
        const connectionId = Math.random().toString(36).substring(2, 15);
        connectionIdRef.current = connectionId; // Store for potential use, though activeConnectionId is primary
        let isEffectActive = true; // Flag specific to this effect execution's lifecycle

        console.log(`Effect triggered. Attempt ID: ${connectionId}. isTwitchConnected: ${isTwitchConnected}, twitchChannel: ${twitchChannel}`);

        // Cleanup function for this specific effect execution
        const cleanup = () => {
            console.log(`Cleanup running for effect instance ${connectionId}`);
            isEffectActive = false; // Mark this effect execution as inactive
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
                reconnectTimeoutRef.current = null;
            }
            // Call safeDisconnect for the ID associated with *this* effect instance
            safeDisconnect(connectionId, 'cleanup');
        };

        // --- Conditions to NOT connect ---
        if (!isTwitchConnected || !twitchChannel) {
            console.log(`Connection prerequisites not met for attempt ${connectionId}. Cleaning up any active connection.`);
            if (activeConnectionId) {
                safeDisconnect(activeConnectionId, 'state changed');
            }
            connectionAttempts = 0;

            if (!isInitialEffectRunRef.current && isMountedRef.current && setConnectionStatus) {
                console.log(`Setting status to disconnected (not initial run) for ${connectionId}`);
                setConnectionStatus("disconnected", 'Twitch connection disabled or channel not set.');
            } else if (isInitialEffectRunRef.current) {
                console.log(`Skipping setConnectionStatus on initial run for ${connectionId}`);
            }

            isInitialEffectRunRef.current = false;
            return cleanup;
        }

        // --- Conditions met, attempt connection after debounce ---
        console.log(`Scheduling connection attempt ${connectionId} in ${CONNECTION_DEBOUNCE_MS}ms`);
        isInitialEffectRunRef.current = false;

        connectionDebounceTimeout = setTimeout(() => {
            connectionDebounceTimeout = null; // Clear the timeout ref

            // Check if the effect is still active after the debounce
            if (!isEffectActive) {
                console.log(`Connection attempt ${connectionId} aborted after debounce (effect inactive).`);
                return; // Don't proceed if cleanup already ran
            }

            // If there's already an active connection from a *previous* effect run, clean it up.
            if (activeConnectionId && activeConnectionId !== connectionId) {
                console.warn(`Found lingering active connection ${activeConnectionId}, cleaning up before starting ${connectionId}`);
                safeDisconnect(activeConnectionId, 'replaced');
            } else if (activeConnectionId === connectionId) {
                // This shouldn't happen if logic is correct, but indicates a potential issue.
                console.warn(`Attempting to start connection ${connectionId}, but it's already marked as active.`);
                // Optionally, disconnect and restart cleanly
                // safeDisconnect(connectionId, 'restart duplicate');
            }

            // Set this as the active connection *just before* starting
            console.log(`Setting active connection ID to: ${connectionId} for channel: ${twitchChannel}`);
            activeConnectionId = connectionId;


            // Function to start connection process (setting handlers, calling init)
            const startConnection = () => {
                // Final checks before initiating
                if (activeConnectionId !== connectionId || !isEffectActive || !isMountedRef.current) {
                    console.log(`Connection process for ${connectionId} aborted (stale, effect inactive, or unmounted). Active: ${activeConnectionId}`);
                    // If this was supposed to be the active connection but isn't, ensure status reflects reality
                    if (activeConnectionId !== connectionId && setConnectionStatus) {
                        setConnectionStatus('disconnected', 'Connection attempt aborted.');
                    }
                    return;
                }

                console.log(`Starting connection process for ${connectionId}`);
                if (setConnectionStatus) {
                    setConnectionStatus('reconnecting', `Connecting to ${twitchChannel}...`);
                }

                try {
                    // --- ComfyJS Event Handlers ---
                    // Ensure handlers are only active for the current connection ID
                    ComfyJS.onConnected = (address, port, _isFirstConnect) => {
                        if (activeConnectionId === connectionId && isEffectActive && isMountedRef.current) {
                            console.log(`Successfully connected (${connectionId}) to Twitch chat: ${address}:${port}`);
                            if (setConnectionStatus) {
                                setConnectionStatus('connected', `Connected to ${twitchChannel}'s chat`);
                            }
                            connectionAttempts = 0;
                            lastErrorTimeRef.current = 0;
                        } else {
                            console.log(`Ignoring stale onConnected event. Target ID: ${connectionId}, Active ID: ${activeConnectionId}, Effect Active: ${isEffectActive}, Mounted: ${isMountedRef.current}`);
                        }
                    };

                    ComfyJS.onError = (error) => {
                        if (activeConnectionId !== connectionId || !isEffectActive || !isMountedRef.current) {
                            console.log(`Ignoring stale onError event. Target ID: ${connectionId}, Active ID: ${activeConnectionId}, Effect Active: ${isEffectActive}, Mounted: ${isMountedRef.current}`);
                            return;
                        }

                        console.error(`Connection error (${connectionId}):`, error);
                        if (setConnectionStatus) {
                            setConnectionStatus('error', `Connection error: ${error.toString()}`);
                        }

                        // Clear the active ID on error, forcing a reconnect cycle via the effect
                        // activeConnectionId = null; // Let the reconnect logic handle it instead

                        const now = Date.now();
                        const timeSinceLastError = now - lastErrorTimeRef.current;
                        lastErrorTimeRef.current = now;

                        if (timeSinceLastError < 10000) {
                            connectionAttempts++;
                        } else {
                            connectionAttempts = 1; // Reset if error is isolated
                        }

                        // Schedule a reconnect attempt using backoff
                        const delay = getBackoffDelay();
                        console.log(`Scheduling reconnect for ${connectionId} in ${delay}ms due to error.`);
                        if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);

                        reconnectTimeoutRef.current = setTimeout(() => {
                            // Re-check conditions before attempting reconnect
                            if (isEffectActive && activeConnectionId === connectionId && isMountedRef.current) {
                                console.log(`Retrying connection for ${connectionId} after error.`);
                                startConnection(); // Retry the connection process
                            } else {
                                console.log(`Reconnect aborted for ${connectionId} (stale, effect inactive, or unmounted after error)`);
                            }
                        }, delay);
                    };

                    ComfyJS.onCommand = (user, command, message, flags) => {
                        if (activeConnectionId === connectionId && isEffectActive && isMountedRef.current && (flags.mod || flags.broadcaster)) {
                            const chatCommands = getChatCommands(handlersRef.current);
                            const cmd = chatCommands.find(c => c.name === command);
                            if (cmd) {
                                const args = message.split(" ");
                                cmd.execute(user, args);
                            }
                        }
                    };

                    // --- Initialize the connection ---
                    console.log(`Connection ${connectionId} initializing for channel: ${twitchChannel}`);
                    if (twitchToken) {
                        const formattedToken = twitchToken.startsWith('oauth:') ? twitchToken : `oauth:${twitchToken}`;
                        ComfyJS.Init(twitchChannel, formattedToken);
                    } else {
                        ComfyJS.Init(twitchChannel);
                    }
                    console.log(`ComfyJS.Init called for ${connectionId}`);

                } catch (e) {
                    console.error(`Error during connection setup/init (${connectionId}):`, e);
                    if (isMountedRef.current && setConnectionStatus) {
                        setConnectionStatus('error', `Setup/Init error: ${e}`);
                    }

                    // Schedule a reconnect attempt on setup/init error
                    connectionAttempts++;
                    const delay = getBackoffDelay();
                    console.log(`Scheduling reconnect for ${connectionId} in ${delay}ms due to setup/init error.`);
                    if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);

                    reconnectTimeoutRef.current = setTimeout(() => {
                        if (isEffectActive && activeConnectionId === connectionId && isMountedRef.current) {
                            console.log(`Retrying connection for ${connectionId} after setup/init error.`);
                            startConnection();
                        } else {
                            console.log(`Reconnect aborted for ${connectionId} (stale, effect inactive, or unmounted after setup/init error)`);
                        }
                    }, delay);
                }
            };

            startConnection();

        }, CONNECTION_DEBOUNCE_MS);

        return cleanup;

    }, [isTwitchConnected, twitchChannel, twitchToken, setConnectionStatus, safeDisconnect]);

    // Handle token changes from storage
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'twitchToken') {
                const token = event.newValue || '';
                console.log("Twitch token updated via storage event.");
                setTwitchToken(token);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('storage', handleStorageChange);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('storage', handleStorageChange);
            }
        };
    }, []); // Empty dependency array - runs once on mount

    return (
        <iframe
            title={`Twitch Chat Embed for ${twitchChannel || 'channel'}`} // Handle potential null channel in title
            className='hidden'
            ref={iframeRef}
            src={(typeof window !== 'undefined' && twitchChannel) ? `https://www.twitch.tv/embed/${twitchChannel}/chat?parent=${window.location.hostname}` : undefined}
            height="1"
            width="1"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
    );
});