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

export default function BossList({ gameKey }: { gameKey: string }) {
    const { progress, isSharedLink, updateProgress } = useProgress();

    const toggleBossDefeat = (bossId: string, bName: string) => {
        if (isSharedLink) return; // Prevent modifications when viewing shared progress

        const index = progress.bossesAttempts.findIndex(b => b.id === bossId);
        const newArr = progress.bossesAttempts;

        if (index !== -1) {
            newArr[index].defeated = !newArr[index].defeated;
        } else {
            // Add boss if it doesn't exist
            newArr.push({ id: bossId, attempts: 0, name: bName, defeated: true });
        }

        updateProgress({ ...progress, bossesAttempts: newArr });
    };

    const modifyAttempts = (bossId: string, increment: boolean, bossName: string) => {
        if (isSharedLink) return; // Prevent modifications when viewing shared progress

        const newArr = progress.bossesAttempts;

        const index = newArr.findIndex(b => b.id === bossId);

        if (index !== -1) {
            newArr[index].attempts = increment ? newArr[index].attempts + 1 : Math.max(0, newArr[index].attempts - 1);
        } else {
            newArr.push({ id: bossId, attempts: increment ? 1 : 0, name: bossName, defeated: false });
        }

        updateProgress({ ...progress, bossesAttempts: newArr });
    };

    return (
        <TooltipProvider>
            <div className="space-y-4">
                {bosses[gameKey].map(boss => (
                    <div
                        key={boss.id}
                        className={`
                            border border-zinc-700/50 rounded-lg p-4 
                            transition-all duration-300
                            ${progress.bossesAttempts.find(b => b.id === boss.id)?.defeated
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
                                            onClick={() => modifyAttempts(boss.id, false, boss.name)}
                                            className="text-zinc-400 hover:text-white transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="text-amber-500 w-8 text-center">{progress.bossesAttempts.find(b => b.id === boss.id)?.attempts || 0}</span>
                                        <button
                                            onClick={() => modifyAttempts(boss.id, true, boss.name)}
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
                                                ${progress.bossesAttempts.find(b => b.id === boss.id)?.defeated
                                                    ? 'bg-emerald-500/80 hover:bg-emerald-500 text-white'
                                                    : 'bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200'}
                                            `}
                                        >
                                            {progress.bossesAttempts.find(b => b.id === boss.id)?.defeated ? <Check /> : <X />}
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