'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'next/navigation';
import { encode, decode } from 'js-base64';
import { AllGameProgress } from '@/types/progress.types';
import { DEFAULT_PROGRESSES } from '@/data/defaultProgresses';

import _ from 'lodash';

interface ProgressContextType {
    progress: AllGameProgress;
    isSharedLink: boolean;
    isUnsavedProgress: boolean;
    isTwitchConnected: boolean;
    twitchChannel: string;
    updateProgress: (data: Partial<AllGameProgress>) => void;
    getShareableLink: () => string;
    loadSharedProgress: (encodedData: string) => void;
    saveProgress: () => void;
    resetProgress: () => void;
    setIsTwitchConnected: (isConnected: boolean) => void;
    setTwitchChannel: (name: string) => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children, gameKey = 'ds1' }: { children: React.ReactNode, gameKey: string }) {
    const searchParams = useSearchParams();
    const [progress, setProgress] = useState<AllGameProgress>(DEFAULT_PROGRESSES[gameKey]);
    const [isSharedLink, setIsSharedLink] = useState(false);
    const [isUnsavedProgress, setIsUnsavedProgress] = useState(false);
    const [isTwitchConnected, setIsTwitchConnected] = useState(false);
    const [twitchChannel, setTwitchChannel] = useState('');

    useEffect(() => {
        const sharedProgress = searchParams.get('p');
        if (sharedProgress) {
            setIsSharedLink(true);
            loadSharedProgress(sharedProgress);
        } else {
            const saved = localStorage.getItem(`${gameKey}-progress`);
            if (saved) setProgress(JSON.parse(saved));
        }
    }, [gameKey, searchParams]);

    const saveProgress = () => {
        localStorage.setItem(`${gameKey}-progress`, JSON.stringify(progress));
        setIsUnsavedProgress(false);
    };

    const resetProgress = () => {
        localStorage.removeItem(`${gameKey}-progress`);
        setProgress(DEFAULT_PROGRESSES[gameKey]);
        setIsUnsavedProgress(false);
    };

    const updateProgress = (data: Partial<AllGameProgress>) => {
        const newProgress = { ...progress, ...data };
        setProgress(newProgress);

        const saved = localStorage.getItem(`${gameKey}-progress`);
        if (saved && _.isEqual(JSON.parse(saved), newProgress)) {
            setIsUnsavedProgress(false);
        } else {
            setIsUnsavedProgress(true);
        }
    };

    const getShareableLink = () => {
        const encoded = encode(JSON.stringify(progress));
        return `${window.location.origin}${window.location.pathname}?p=${encoded}`;
    };

    const loadSharedProgress = (encodedData: string) => {
        try {
            const decoded = JSON.parse(decode(encodedData));
            setProgress(decoded);
        } catch (error) {
            console.error('Failed to load shared progress: ', error);
        }
    };

    return (
        <ProgressContext.Provider value={{
            progress,
            isSharedLink,
            isUnsavedProgress,
            isTwitchConnected,
            twitchChannel,
            updateProgress,
            getShareableLink,
            loadSharedProgress,
            saveProgress,
            resetProgress,
            setIsTwitchConnected,
            setTwitchChannel
        }}
        >
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
}