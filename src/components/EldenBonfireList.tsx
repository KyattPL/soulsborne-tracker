'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Check, X } from 'lucide-react';
import { bonfires } from '@/data/bonfires';
import { useProgress } from './ProgressProvider';
import ScrollableCard from './ScrollableCard';
import { Button } from './ui/button';
import { useState } from 'react';

export default function EldenBonfireList() {
    const { progress, isSharedLink, updateProgress } = useProgress();
    const [showDLC, setShowDLC] = useState(false);

    const toggleDLCView = () => {
        setShowDLC(!showDLC);
    };

    const toggleBonfireUnlocked = (bonfireId: number, bName: string, bLocation: string) => {
        if (isSharedLink) return; // Prevent modifications when viewing shared progress

        const index = progress.bonfires.findIndex(b => b.id === bonfireId);
        const newArr = progress.bonfires;

        if (index !== -1) {
            newArr[index].unlocked = !newArr[index].unlocked;
        } else {
            // Add bonfire if it doesn't exist
            newArr.push({ id: bonfireId, name: bName, unlocked: true, location: bLocation });
        }

        updateProgress({ ...progress, bonfires: newArr });
    };

    let locations = [...new Set(bonfires['elden'].map(b => b.location))];
    let noSites = 0;

    if (showDLC) {
        locations = locations.filter(l => ['Shadow Keep', 'Scadu Altus', 'Land of the Tower', 'Gravesite Plain'].includes(l));
        noSites = bonfires['elden'].filter(b => ['Shadow Keep', 'Scadu Altus', 'Land of the Tower', 'Gravesite Plain'].includes(b.location)).length;
    } else {
        locations = locations.filter(l => !['Shadow Keep', 'Scadu Altus', 'Land of the Tower', 'Gravesite Plain'].includes(l));
        noSites = bonfires['elden'].filter(b => !['Shadow Keep', 'Scadu Altus', 'Land of the Tower', 'Gravesite Plain'].includes(b.location)).length;
    }

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
                        {noSites} sites
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {locations.map(location => (
                        <ScrollableCard title={location} key={location} isElden>
                            {bonfires['elden'].filter(b => b.location === location).map(bonfire => (
                                <div
                                    key={bonfire.id}
                                    className={`
                                            border border-zinc-700/50 rounded-lg p-3 
                                            transition-all duration-300
                                            ${progress.bonfires.find(b => b.id === bonfire.id)?.unlocked
                                            ? 'bg-emerald-900/30'
                                            : 'hover:bg-zinc-700/30'}
                                        `}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-zinc-200">{bonfire.name}</h3>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <button
                                                        onClick={() => toggleBonfireUnlocked(bonfire.id, bonfire.name, bonfire.location)}
                                                        className={`
                                                                p-2 rounded-full transition-all duration-200
                                                                ${progress.bonfires.find(b => b.id === bonfire.id)?.unlocked
                                                                ? 'bg-emerald-500/80 hover:bg-emerald-500 text-white'
                                                                : 'bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200'}
                                                            `}
                                                        disabled={isSharedLink}
                                                    >
                                                        {progress.bonfires.find(b => b.id === bonfire.id)?.unlocked ? <Check /> : <X />}
                                                    </button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Toggle unlocked</p>
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