'use client';

import { useState, useEffect } from 'react';
import { bosses } from '@/data/bosses';

export default function ProgressStats() {
    const [defeatedBosses, setDefeatedBosses] = useState<string[]>([]);

    useEffect(() => {
        const handleStorageChange = () => {
            const savedBosses = JSON.parse(localStorage.getItem('defeatedBosses') || '[]');
            setDefeatedBosses(savedBosses);
        };

        // Initial load
        handleStorageChange();

        // Listen for changes
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('localStorageChange', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('localStorageChange', handleStorageChange);
        };
    }, []);

    const progressPercentage = Math.round((defeatedBosses.length / bosses.length) * 100);

    return (
        <div className="space-y-4">
            <div className="w-full bg-zinc-700/50 rounded-full h-4">
                <div
                    className="bg-emerald-500/80 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-zinc-300">Bosses Defeated: {defeatedBosses.length} / {bosses.length}</span>
                <span className="text-zinc-300">Completion: {progressPercentage}%</span>
            </div>
        </div>
    );
}