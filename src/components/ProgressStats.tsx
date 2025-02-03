'use client';

import { useState, useEffect } from 'react';
import bossData from '../data/bosses.json';

export default function ProgressStats() {
    const [completedBosses, setCompletedBosses] = useState([]);

    useEffect(() => {
        const savedBosses = JSON.parse(localStorage.getItem('completedBosses') || '[]');
        setCompletedBosses(savedBosses);
    }, []);

    const progressPercentage = Math.round((completedBosses.length / bossData.length) * 100);

    return (
        <div className="space-y-4">
            <div className="w-full bg-zinc-700 rounded-full h-4">
                <div
                    className="bg-emerald-500 h-4 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            <div className="flex justify-between">
                <span className="text-zinc-100">Bosses Defeated: {completedBosses.length} / {bossData.length}</span>
                <span className="text-zinc-100">Completion: {progressPercentage}%</span>
            </div>
        </div>
    );
}