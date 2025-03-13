'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function TwitchAuthButton() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const clientId = '8hxfohcuc3cwyzhv9a95p3igpfxa1q';

    // Scopes needed for chat functionality https://dev.twitch.tv/docs/api/reference/#send-chat-message
    const scopes = 'user:write:chat user:read:email user:read:chat chat:edit chat:read user:read:whispers user:manage:whispers moderator:manage:chat_messages';
    const redirectUri = typeof window !== 'undefined' ?
        `${window.location.origin}${window.location.pathname}` : '';

    // Check for token in URL or sessionStorage on component mount
    useEffect(() => {
        // Function to extract token from URL fragment
        const extractTokenFromHash = () => {
            if (typeof window === 'undefined') return null;

            const hash = window.location.hash;
            if (!hash || hash.length === 0) return null;

            const params = new URLSearchParams(hash.substring(1));
            return params.get('access_token');
        };

        // Check if we have a token in sessionStorage
        const storedToken = sessionStorage.getItem('twitchToken');
        if (storedToken) {
            setIsAuthorized(true);
            return;
        }

        // Check if we have a token in the URL
        const token = extractTokenFromHash();
        if (token) {
            // Store the token
            sessionStorage.setItem('twitchToken', token);
            setIsAuthorized(true);

            // Clean up the URL (remove the hash)
            if (window.history && window.history.replaceState) {
                window.history.replaceState(
                    null,
                    document.title,
                    window.location.pathname + window.location.search
                );
            }
        }
    }, []);

    // Handle authorization button click
    const handleAuth = () => {
        const state = Math.random().toString(36).substring(2, 15);
        const authUrl = `https://id.twitch.tv/oauth2/authorize?` +
            `response_type=token` +
            `&client_id=${clientId}` +
            `&redirect_uri=${redirectUri}` +
            `&scope=${encodeURIComponent(scopes)}` +
            `&state=${state}`;

        window.location.href = authUrl;
    };

    // Handle logout
    const handleLogout = () => {
        sessionStorage.removeItem('twitchToken');
        setIsAuthorized(false);
    };

    return (
        <Button
            variant={isAuthorized ? "destructive" : "default"}
            onClick={isAuthorized ? handleLogout : handleAuth}
            className="whitespace-nowrap"
        >
            {isAuthorized ? "Disconnect Twitch Chat" : "Authorize Twitch Chat"}
        </Button>
    );
}