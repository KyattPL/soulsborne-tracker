'use client';

import { useState, useEffect } from 'react';
import bossData from '../data/bosses.json';

interface BossInfo {
    id: number;
    name: string;
    done: boolean;
};

export default function BossList() {
    // const [bosses, setBosses] = useState([]);
    const [completedBosses, setCompletedBosses] = useState<BossInfo[]>([]);

    useEffect(() => {
        // Load completed bosses from localStorage
        const savedBosses = JSON.parse(localStorage.getItem('completedBosses') || '[]');
        setCompletedBosses(savedBosses);
    }, []);

    const toggleBossCompletion = (bossId: number) => {
        const foundBoss = completedBosses.find(b => b.id === bossId);
        if (foundBoss !== undefined) {
            foundBoss.done = !foundBoss.done;
        }
    };

    return (
        <div className="space-y-2">
            {bossData.map(boss => (
                <div
                    key={boss.id}
                    className="flex items-center space-x-2"
                >
                    <input
                        type="checkbox"
                        checked={boss.done}
                        onChange={() => toggleBossCompletion(boss.id)}
                        className="form-checkbox"
                    />
                    <span className="text-zinc-100">{boss.name}</span>
                </div>
            ))}
        </div>
    );
}