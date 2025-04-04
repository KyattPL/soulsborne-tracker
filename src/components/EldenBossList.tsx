'use client';

import { useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Check, X, Plus, Minus } from 'lucide-react';
import { bosses } from '@/data/bosses';
import { useProgress } from './ProgressProvider';
import { Button } from '@/components/ui/button';
import ScrollableCard from './ScrollableCard';

export default function EldenBossList() {
    const { progress, isSharedLink, updateProgress } = useProgress();
    const [showDLC, setShowDLC] = useState(false);

    // Toggle between main game and DLC
    const toggleDLCView = () => {
        setShowDLC(!showDLC);
    };

    const toggleBossDefeat = (bossId: string, bName: string) => {
        if (isSharedLink) return; // Prevent modifications when viewing shared progress

        const index = progress.bossesAttempts.findIndex(b => b.id === bossId);
        const newArr = [...progress.bossesAttempts]; // Create a new array to avoid direct mutation

        if (index !== -1) {
            newArr[index] = { ...newArr[index], defeated: !newArr[index].defeated };
        } else {
            // Add boss if it doesn't exist
            newArr.push({ id: bossId, attempts: 0, name: bName, defeated: true });
        }

        updateProgress({ ...progress, bossesAttempts: newArr });
    };

    const modifyAttempts = (bossId: string, increment: boolean, bossName: string) => {
        if (isSharedLink) return; // Prevent modifications when viewing shared progress

        const newArr = [...progress.bossesAttempts]; // Create a new array to avoid direct mutation
        const index = newArr.findIndex(b => b.id === bossId);

        if (index !== -1) {
            newArr[index] = {
                ...newArr[index],
                attempts: increment ? newArr[index].attempts + 1 : Math.max(0, newArr[index].attempts - 1)
            };
        } else {
            newArr.push({ id: bossId, attempts: increment ? 1 : 0, name: bossName, defeated: false });
        }

        updateProgress({ ...progress, bossesAttempts: newArr });
    };

    // Filter bosses by DLC status
    const filteredBosses = bosses['elden'].filter(boss => Boolean(boss.sote) === showDLC);

    // Group bosses by location
    const bossesByLocation = filteredBosses.reduce((acc, boss) => {
        if (!acc[boss.location]) {
            acc[boss.location] = [];
        }
        acc[boss.location].push(boss);
        return acc;
    }, {} as Record<string, typeof bosses['elden']>);

    // Sort locations alphabetically
    const sortedLocations = Object.keys(bossesByLocation).sort();

    return (
        <TooltipProvider>
            <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center mb-2">
                    <Button
                        variant="outline"
                        onClick={toggleDLCView}
                        className={`
                            text-lg font-semibold px-6 py-2
                            ${showDLC
                                ? 'bg-amber-500/20 text-amber-500 border-amber-500/50 hover:bg-amber-500/30'
                                : 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700'}
                        `}
                    >
                        {showDLC ? 'Shadow of the Erdtree' : 'Main Game'}
                    </Button>

                    <div className="text-sm text-zinc-400">
                        {filteredBosses.length} bosses
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {sortedLocations.map(location => (
                        <ScrollableCard title={location} key={location} isElden>
                            {bossesByLocation[location].map(boss => (
                                <div
                                    key={boss.id}
                                    className={`
                                            border border-zinc-700/50 rounded-lg p-3 
                                            transition-all duration-300
                                            ${progress.bossesAttempts.find(b => b.id === boss.id)?.defeated
                                            ? 'bg-emerald-900/30'
                                            : 'hover:bg-zinc-700/30'}
                                        `}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-zinc-200">{boss.name}</h3>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="flex flex-col items-end">
                                                <span className="text-zinc-400 text-xs mb-1">Attempts</span>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => modifyAttempts(boss.id, false, boss.name)}
                                                        className="text-zinc-400 hover:text-white transition-colors"
                                                        disabled={isSharedLink}
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="text-amber-500 w-8 text-center">{progress.bossesAttempts.find(b => b.id === boss.id)?.attempts || 0}</span>
                                                    <button
                                                        onClick={() => modifyAttempts(boss.id, true, boss.name)}
                                                        className="text-zinc-400 hover:text-white transition-colors"
                                                        disabled={isSharedLink}
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
                                                                p-2 rounded-full transition-all duration-200
                                                                ${progress.bossesAttempts.find(b => b.id === boss.id)?.defeated
                                                                ? 'bg-emerald-500/80 hover:bg-emerald-500 text-white'
                                                                : 'bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200'}
                                                            `}
                                                        disabled={isSharedLink}
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
                        </ScrollableCard>
                    ))}
                </div>
            </div>
        </TooltipProvider>
    );
}