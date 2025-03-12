// TwitchChatMonitor.tsx
'use client';
import { memo, useRef, useEffect } from 'react';
import ComfyJS from 'comfy.js';
import { useProgress } from './ProgressProvider';
import { useChatCommands } from '../hooks/useChatCommands';
import { getChatCommands } from '../utils/chatCommands';

// This component is memoized to prevent re-renders when progress changes
export const TwitchChatMonitor = memo(function TwitchChatMonitor() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { isTwitchConnected, twitchChannel } = useProgress();
    const handlers = useChatCommands();
    const handlersRef = useRef(handlers);
    const connectionRef = useRef<boolean>(false);

    // Keep the handlers ref updated with the latest handlers
    useEffect(() => {
        handlersRef.current = handlers;
    }, [handlers]);

    // Handle the Twitch connection with stable dependencies
    useEffect(() => {
        // Return early if Twitch is not connected
        if (!isTwitchConnected) return;

        // Avoid reconnecting if already connected
        if (connectionRef.current) return;
        connectionRef.current = true;

        console.log(`Connecting to Twitch chat for channel: ${twitchChannel}`);

        // Command handler that uses the ref to access latest handlers
        ComfyJS.onCommand = (user, command, message, flags) => {
            if (flags.mod || user.toLowerCase() === twitchChannel.toLowerCase()) {
                // Get commands with latest handlers from ref
                const chatCommands = getChatCommands(handlersRef.current);
                const cmd = chatCommands.find(c => c.name === command);

                if (cmd) {
                    const args = message.split(" ");
                    cmd.execute(user, args);
                }
            }
        };

        // Connect to Twitch
        ComfyJS.Init(twitchChannel);

        // Cleanup on unmount or channel change
        return () => {
            console.log(`Disconnecting from Twitch chat for channel: ${twitchChannel}`);
            connectionRef.current = false;
            ComfyJS.Disconnect();
        };
    }, [isTwitchConnected, twitchChannel]); // Stable dependencies

    if (!isTwitchConnected) {
        return null;
    }

    return (
        <iframe
            className='hidden'
            ref={iframeRef}
            src={`https://www.twitch.tv/embed/${twitchChannel}/chat?parent=${window.location.hostname}`}
            height="200"
            width="300"
        />
    );
});