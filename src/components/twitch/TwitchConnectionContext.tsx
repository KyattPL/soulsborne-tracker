// TwitchConnectionContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode, useCallback, useRef } from 'react';

type ConnectionStatus = 'connected' | 'disconnected' | 'error' | 'reconnecting' | null;

interface TwitchConnectionContextType {
    connectionStatus: ConnectionStatus;
    statusMessage: string;
    setConnectionStatus: (status: ConnectionStatus, message?: string) => void;
}

const TwitchConnectionContext = createContext<TwitchConnectionContextType | undefined>(undefined);

export function TwitchConnectionProvider({ children }: { children: ReactNode }) {
    const [connectionStatus, setStatus] = useState<ConnectionStatus>(null);
    const [statusMessage, setStatusMessage] = useState<string>('');
    const toastTimeout = useRef<NodeJS.Timeout | null>(null); // Ref to hold the timeout

    // Use useCallback to memoize setConnectionStatus
    const setConnectionStatus = useCallback((status: ConnectionStatus, message = '') => {
        setStatus(status);
        setStatusMessage(message);

        // Clear any existing timeout
        if (toastTimeout.current) {
            clearTimeout(toastTimeout.current);
            toastTimeout.current = null;
        }

        // Automatically clear status for 'connected' and 'disconnected' after a delay
        if (status === 'connected' || status === 'disconnected') {
            toastTimeout.current = setTimeout(() => {
                setStatus(null); // Reset status to null to hide toast
                setStatusMessage(''); // Clear message as well
                toastTimeout.current = null;
            }, 3000); // 3 seconds delay
        }
    }, []);

    return (
        <TwitchConnectionContext.Provider
            value={{
                connectionStatus,
                statusMessage,
                setConnectionStatus,
            }}
        >
            {children}
        </TwitchConnectionContext.Provider>
    );
}

export function useTwitchConnection() {
    const context = useContext(TwitchConnectionContext);
    if (context === undefined) {
        throw new Error('useTwitchConnection must be used within a TwitchConnectionProvider');
    }
    return context;
}