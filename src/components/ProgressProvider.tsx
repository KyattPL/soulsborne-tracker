'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { decode } from 'js-base64';
import { createClient } from '@/lib/supabase/client';
import {
    AllGameProgress,
    DarkSouls1Progress
} from '@/types/database.types';
import { User } from '@supabase/auth-js';

interface ProgressContextType {
    progress: AllGameProgress;
    isUrlProgress: boolean;
    isOnline: boolean;
    streamerId: string | null;
    canEdit: boolean;
    user: User | null;
    updateProgress: (data: Partial<AllGameProgress>) => Promise<void>;
    connect: (streamerId: string) => Promise<void>;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}

const keyToGameTitle: Record<string, string> = {
    'ds1': "Dark Souls 1",
    'ds2': "Dark Souls 2",
    'ds3': "Dark Souls 3",
    'bb': "Bloodborne",
    'elden': "Elden Ring",
    'sekiro': "Sekiro",
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children, gameKey = 'ds1' }: { children: React.ReactNode, gameKey: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const supabase = createClient();

    const [isUrlProgress, setIsUrlProgress] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const [streamerId, setStreamerId] = useState<string | null>(null);
    const [canEdit, setCanEdit] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    // Default progress for Dark Souls 1
    const [progress, setProgress] = useState<AllGameProgress>({
        game: 'Dark Souls 1',
        playerStats: {
            soulLevel: 1,
            newGamePlusCount: 0,
            maxWeaponUpgrade: 0,
        },
        charStats: {
            vitality: 10,
            attunement: 10,
            endurance: 10,
            strength: 10,
            dexterity: 10,
            resistance: 10,
            intelligence: 10,
            faith: 10,
        },
        defeatedBosses: [],
        customTrackers: [],
    } as DarkSouls1Progress);

    useEffect(() => {
        const addStreamerParam = async () => {
            // Check if on a game-specific page
            const gamePages = ['/ds1', '/ds2', '/ds3', '/bb', '/elden', '/sekiro'];
            if (!gamePages.includes(pathname)) return;

            // Check if streamer param is already present
            if (searchParams.get('streamer')) return;

            // Check if user is logged in
            const { data: { session } } = await supabase.auth.getSession();
            if (!session?.user) return;

            // Add streamer param and redirect
            const currentParams = new URLSearchParams(window.location.search);
            currentParams.set('streamer', session.user.id);
            router.push(`${pathname}?${currentParams.toString()}`);
        };

        addStreamerParam();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, user]);

    // Load initial data
    useEffect(() => {
        const progressParam = searchParams.get('p');
        const streamerIdParam = searchParams.get('streamer');

        if (progressParam) {
            loadFromUrl(progressParam);
        } else if (streamerIdParam) {
            connect(streamerIdParam);
        } else if (user) {
            // If user is logged in but no streamer param, use their own progress
            connect(user.id);
        } else {
            loadFromLocalStorage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams, user]);

    // Auth state management
    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (session?.user) {
                setUser(session.user);
                await initializeUserData(session.user.id);

                // Check edit permission if there's a streamer param
                const streamerIdParam = searchParams.get('streamer');
                if (streamerIdParam) {
                    await checkEditPermission(session.user.id, streamerIdParam);
                }
            }
        };

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (event === 'SIGNED_IN' && session?.user) {
                    setUser(session.user);
                    await initializeUserData(session.user.id);
                } else if (event === 'SIGNED_OUT') {
                    setUser(null);
                    setCanEdit(false);
                    loadFromLocalStorage();
                }
            }
        );

        checkSession();

        return () => {
            authListener.subscription.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkEditPermission = async (currentUserId: string, targetStreamerId: string) => {
        // User can edit their own progress
        if (currentUserId === targetStreamerId) {
            setCanEdit(true);
            return;
        }

        // Check if user is a mod for the streamer
        const { data: modData } = await supabase
            .from('moderator_relationships')
            .select('*')
            .eq('mod_id', currentUserId)
            .eq('streamer_id', targetStreamerId)
            .single();

        setCanEdit(!!modData);
    };

    // Initialize user's profile and progress
    const initializeUserData = async (userId: string) => {
        try {
            // Create profile if doesn't exist
            const { error: profileError } = await supabase
                .from('profiles')
                .upsert({
                    id: userId,
                    updated_at: new Date().toISOString()
                })
                .select()
                .single();

            if (profileError) throw profileError;

            // Initialize game progress if doesn't exist
            const { error: progressError } = await supabase
                .from('streamer_game_progress')
                .select('*')
                .eq('streamer_id', userId)
                .eq('game_title', keyToGameTitle[gameKey])
                .single();

            if (progressError) {
                await supabase
                    .from('streamer_game_progress')
                    .insert({
                        streamer_id: userId,
                        game_title: keyToGameTitle[gameKey],
                        progress_data: progress
                    });
            }
        } catch (error) {
            console.error('Failed to initialize user data:', error);
        }
    };

    const loadFromUrl = async (param: string) => {
        try {
            const decodedProgress = JSON.parse(decode(param));
            setProgress(decodedProgress);
            setIsUrlProgress(true);
            setIsOnline(false);
        } catch (error) {
            console.error('Failed to decode progress:', error);
            loadFromLocalStorage();
        }
    };

    const loadFromLocalStorage = () => {
        const localStorageKey = `${keyToGameTitle[gameKey]}-progress`;
        const savedProgress = localStorage.getItem(localStorageKey);

        if (savedProgress) {
            const parsedProgress = JSON.parse(savedProgress);
            setProgress(parsedProgress);
        }

        setIsUrlProgress(false);
        setIsOnline(false);
    };

    const connect = async (id: string) => {
        const { data: progressData } = await supabase
            .from('streamer_game_progress')
            .select('*')
            .eq('streamer_id', id)
            .eq('game_title', keyToGameTitle[gameKey])
            .single();

        if (progressData) {
            setProgress(progressData.progress_data);
            setStreamerId(id);
            setIsOnline(true);
            setIsUrlProgress(false);

            // Check edit permission if user is logged in
            if (user) {
                await checkEditPermission(user.id, id);
            }
        }
    };

    const updateProgress = async (data: Partial<AllGameProgress>) => {
        // Merge the new data with existing progress
        const updatedProgress = { ...progress, ...data };
        setProgress(updatedProgress);

        // Save to local storage
        const localStorageKey = `${keyToGameTitle[gameKey]}-progress`;
        localStorage.setItem(localStorageKey, JSON.stringify(updatedProgress));

        console.log(keyToGameTitle[gameKey]);
        console.log(streamerId);

        // If online and connected, update Supabase
        if (isOnline && streamerId) {
            try {
                const { error } = await supabase
                    .from('streamer_game_progress')
                    .update({
                        progress_data: updatedProgress
                    })
                    .eq('streamer_id', streamerId)
                    .eq('game_title', keyToGameTitle[gameKey])
                    .select();

                if (error) throw error;
            } catch (error) {
                console.error('Failed to update online progress:', error);
            }
        }
    };

    const login = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'twitch',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
                scopes: 'moderator:read:followers'
            }
        });

        if (error) {
            console.error('Login error:', error);
        }
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error('Logout error:', error);
        }

        // Reset states
        setUser(null);
        setCanEdit(false);
        setIsOnline(false);
        setStreamerId(null);

        router.refresh();
    };

    return (
        <ProgressContext.Provider
            value={{
                progress,
                isUrlProgress,
                isOnline,
                streamerId,
                canEdit,
                user,
                updateProgress,
                connect,
                login,
                logout
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