'use client';
import { useEffect, useRef } from 'react';
import ComfyJS from 'comfy.js';

import { decode } from 'js-base64';
import { useProgress } from './ProgressProvider';

export function TwitchChatMonitor() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { isTwitchConnected, twitchChannel, updateProgress } = useProgress();

    useEffect(() => {
        if (!isTwitchConnected) return;

        ComfyJS.onCommand = (user, command, message, flags) => {
            if (command === 'updateprogress' && (flags.mod || user.toLowerCase() === twitchChannel.toLowerCase())) {
                console.log(JSON.parse(decode(message)));
                // updateProgress(JSON.parse(decode(message)));
            }
        };

        ComfyJS.Init(twitchChannel);

        return () => {
            ComfyJS.Disconnect();
        };
    }, [updateProgress, twitchChannel, isTwitchConnected]);

    return (isTwitchConnected) ? (
        <iframe className='hidden'
            ref={iframeRef}
            src={`https://www.twitch.tv/embed/${twitchChannel}/chat?parent=${window.location.hostname}`}
            height="200"
            width="300"
        />
    ) : <></>;
}
