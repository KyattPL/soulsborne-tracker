// TwitchChatMonitor.tsx
'use client';
import { memo, useRef, useEffect, useState } from 'react';
import ComfyJS from 'comfy.js';
import { useProgress } from './ProgressProvider';
import { useChatCommands } from '../hooks/useChatCommands';
import { getChatCommands } from '../utils/chatCommands';

// This component is memoized to prevent re-renders when progress changes
export const TwitchChatMonitor = memo(function TwitchChatMonitor() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { isTwitchConnected, twitchChannel } = useProgress();
    const [twitchToken, setTwitchToken] = useState<string>('');
    const handlers = useChatCommands();
    const handlersRef = useRef(handlers);
    const connectionRef = useRef<boolean>(false);

    // Keep the handlers ref updated with the latest handlers
    useEffect(() => {
        handlersRef.current = handlers;
    }, [handlers]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('twitchToken');
            if (token) {
                setTwitchToken(token);
            }
        }
    }, []);

    // Handle the Twitch connection with stable dependencies
    useEffect(() => {
        // Return early if Twitch is not connected
        if (!isTwitchConnected || !twitchChannel) return;

        // Avoid reconnecting if already connected
        if (connectionRef.current) return;
        connectionRef.current = true;

        console.log(`Connecting to Twitch chat for channel: ${twitchChannel}`);

        const maxReconnectAttempts = 5;
        let reconnectAttemptsRef = 0;

        const reconnect = () => {
            if (reconnectAttemptsRef >= maxReconnectAttempts) {
                console.error("Max reconnect attempts reached");
                return;
            }

            const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef), 30000);
            console.log(`Attempting to reconnect in ${delay}ms (attempt ${reconnectAttemptsRef + 1})`);

            setTimeout(() => {
                reconnectAttemptsRef += 1;
                if (twitchToken) {
                    ComfyJS.Init(twitchChannel, twitchToken);
                } else {
                    ComfyJS.Init(twitchChannel);
                }
            }, delay);
        };

        ComfyJS.onError = (error) => {
            console.error("Connection error:", error);
            reconnect();
        };

        // Command handler that uses the ref to access latest handlers
        ComfyJS.onCommand = (user, command, message, flags) => {
            if (flags.mod || flags.broadcaster) {
                // Get commands with latest handlers from ref
                const chatCommands = getChatCommands(handlersRef.current);
                const cmd = chatCommands.find(c => c.name === command);

                if (cmd) {
                    const args = message.split(" ");
                    cmd.execute(user, args);
                }
            }
        };

        // Connect to Twitch - use token if available
        if (twitchToken) {
            ComfyJS.Init(twitchChannel, `oauth:${twitchToken}`);
            console.log("Connected with authorization token - chat messages can be sent");
        } else {
            ComfyJS.Init(twitchChannel);
            console.log("Connected without authorization token - can only receive messages");
        }

        // Cleanup on unmount or channel change
        return () => {
            console.log(`Disconnecting from Twitch chat for channel: ${twitchChannel}`);
            connectionRef.current = false;
            ComfyJS.Disconnect();
        };
    }, [isTwitchConnected, twitchChannel, twitchToken]); // Stable dependencies

    // Listen for storage events to detect token changes in other tabs/windows
    useEffect(() => {
        const handleStorageChange = () => {
            const token = sessionStorage.getItem('twitchToken');
            setTwitchToken(token || '');

            // If connection exists and token changed, reconnect
            if (connectionRef.current && isTwitchConnected && twitchChannel) {
                ComfyJS.Disconnect();
                connectionRef.current = false;

                // This will trigger the connection effect
                setTimeout(() => {
                    if (token) {
                        ComfyJS.Init(twitchChannel, token);
                    } else {
                        ComfyJS.Init(twitchChannel);
                    }
                    connectionRef.current = true;
                }, 100);
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
    }, [isTwitchConnected, twitchChannel]);

    if (!isTwitchConnected) {
        return null;
    }

    return (
        <iframe
            className='hidden'
            ref={iframeRef}
            src={`https://www.twitch.tv/embed/${twitchChannel}/chat?parent=${window.location.hostname}`}
            height="800"
            width="300"
        />
    );
});