'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Check, X, Plus, Minus } from 'lucide-react';
import { bosses } from '@/data/bosses';
import { useProgress } from './ProgressProvider';

export default function BossList() {
    const { progress, isUrlProgress, isOnline, canEdit, updateProgress } = useProgress();

    // useEffect(() => {
    //     const savedDefeatedBosses = JSON.parse(localStorage.getItem('defeatedBosses') || '[]');
    //     const savedAttempts = JSON.parse(localStorage.getItem('bossAttempts') || '{}');

    //     setDefeatedBosses(savedDefeatedBosses);
    //     setCurrentAttempts(savedAttempts);
    // }, []);

    const toggleBossDefeat = (bossId: string, bName: string) => {
        if (isUrlProgress) return; // Prevent modifications when viewing shared progress
        if (isOnline && !canEdit) return;

        const index = progress.defeatedBosses.findIndex(b => b.id === bossId);
        const newArr = progress.defeatedBosses;

        if (index !== -1) {
            // Remove boss if it exists
            newArr.splice(index, 1);
        } else {
            // Add boss if it doesn't exist
            newArr.push({ id: bossId, attempts: 0, name: bName });
        }

        updateProgress({ defeatedBosses: newArr });
        // localStorage.setItem('defeatedBosses', JSON.stringify(newDefeatedBosses));

        // window.dispatchEvent(new Event('localStorageChange'));
    };

    const modifyAttempts = (bossId: string, increment: boolean) => {
        if (isUrlProgress) return; // Prevent modifications when viewing shared progress
        if (isOnline && !canEdit) return;

        const newArr = progress.defeatedBosses;

        const index = newArr.findIndex(b => b.id === bossId);
        newArr[index].attempts = increment ? newArr[index].attempts + 1 : Math.max(0, newArr[index].attempts - 1);

        updateProgress({ defeatedBosses: newArr });
        // localStorage.setItem('bossAttempts', JSON.stringify(newAttempts));
    };

    return (
        <TooltipProvider>
            <div className="space-y-4">
                {bosses.map(boss => (
                    <div
                        key={boss.id}
                        className={`
                            border border-zinc-700/50 rounded-lg p-4 
                            transition-all duration-300
                            ${progress.defeatedBosses.findIndex(b => b.id === boss.id) > -1
                                ? 'bg-emerald-900/30'
                                : 'hover:bg-zinc-700/30'}
                        `}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex-grow">
                                <h3 className="font-bold text-zinc-200 text-lg">{boss.name}</h3>
                                <p className="text-zinc-400 text-sm">{boss.location}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-col items-end">
                                    <span className="text-zinc-400 text-xs mb-1">Attempts</span>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => modifyAttempts(boss.id, false)}
                                            className="text-zinc-400 hover:text-white transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="text-amber-500 w-8 text-center">{progress.defeatedBosses.find(b => b.id === boss.id)?.attempts || 0}</span>
                                        <button
                                            onClick={() => modifyAttempts(boss.id, true)}
                                            className="text-zinc-400 hover:text-white transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => toggleBossDefeat(boss.id, boss.name)}
                                            className={`
                                                p-2 rounded-full ml-4 transition-all duration-200
                                                ${progress.defeatedBosses.findIndex(b => b.id === boss.id) > -1
                                                    ? 'bg-emerald-500/80 hover:bg-emerald-500 text-white'
                                                    : 'bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200'}
                                            `}
                                        >
                                            {progress.defeatedBosses.findIndex(b => b.id === boss.id) > -1 ? <Check /> : <X />}
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Toggle defeated</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </TooltipProvider>
    );
}