'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '@/components/ui/tooltip';
import { ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProgress } from './ProgressProvider';
import Image from 'next/image';

const TENDENCY_REGIONS = [
    { id: 'boletaria', name: 'Boletarian Palace', archstone: 'Archstone of the Covetous King' },
    { id: 'stonefang', name: 'Stonefang Tunnel', archstone: 'Archstone of the Digger King' },
    { id: 'latria', name: 'Tower of Latria', archstone: 'Archstone of the Tower Queen' },
    { id: 'storms', name: 'Shrine of Storms', archstone: 'Archstone of the Shadowmen' },
    { id: 'defilement', name: 'Valley of Defilement', archstone: 'Archstone of the Chieftain' }
];

const TENDENCY_SCALE = [
    { value: -3, label: 'Pure Black', color: 'bg-zinc-800 text-white', id: 'pure-black' },
    { value: -2, label: 'Black', color: 'bg-zinc-700 text-white', id: 'black' },
    { value: -1, label: 'Neutral Black', color: 'bg-zinc-600 text-white', id: 'neutral-black' },
    { value: 0, label: 'Neutral', color: 'bg-zinc-500 text-white', id: 'neutral' },
    { value: 1, label: 'Neutral White', color: 'bg-zinc-400 text-black', id: 'neutral-white' },
    { value: 2, label: 'White', color: 'bg-zinc-300 text-black', id: 'white' },
    { value: 3, label: 'Pure White', color: 'bg-zinc-200 text-black', id: 'pure-white' },
];

export default function DesTendency() {
    const { progress, isSharedLink, updateProgress } = useProgress();

    const modifyTendency = (regionId: string, increment: boolean) => {
        if (isSharedLink) return;

        const newTendencies = [...(progress.tendencies || [])];
        const existingIndex = newTendencies.findIndex(t => t.id === regionId);

        if (existingIndex !== -1) {
            const currentValue = newTendencies[existingIndex].value || 0;
            const newValue = increment
                ? Math.min(3, currentValue + 1)
                : Math.max(-3, currentValue - 1);

            newTendencies[existingIndex] = {
                ...newTendencies[existingIndex],
                value: newValue
            };
        } else {
            newTendencies.push({
                id: regionId,
                value: increment ? 1 : -1
            });
        }

        updateProgress({ ...progress, tendencies: newTendencies });
    };

    const getTendencyInfo = (value: number) => {
        return TENDENCY_SCALE.find(s => s.value == value) || TENDENCY_SCALE[3];
    };

    const getTendencyValue = (regionId: string): number => {
        const tendency = progress.tendencies?.find(t => t.id === regionId);
        return tendency?.value || 0;
    };

    return (
        <TooltipProvider>
            <div className="space-y-6">
                {/* World Tendency Section */}
                <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
                    <h2 className="text-2xl font-bold text-amber-500/90 mb-4">World Tendency</h2>
                    <div className="grid grid-cols-5 gap-4">
                        {TENDENCY_REGIONS.map((region) => {
                            const value = getTendencyValue(region.id);
                            const tendencyInfo = getTendencyInfo(value);

                            return (
                                <div
                                    key={region.id}
                                    className="flex flex-col items-center space-y-2"
                                >
                                    <div className="text-center text-zinc-300 mb-2">
                                        {region.name}
                                    </div>
                                    <Image src={`/soulsborne-tracker/images/des/tendency/${region.id}.jpg`}
                                        alt={region.name + ' icon'} width={60} height={230} />
                                    <div className="flex items-center space-x-2">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <button
                                                    onClick={() => modifyTendency(region.id, false)}
                                                    className="text-zinc-400 hover:text-white"
                                                >
                                                    <ArrowDown size={16} />
                                                </button>
                                            </TooltipTrigger>
                                            <TooltipContent>Shift Darker</TooltipContent>
                                        </Tooltip>
                                        <div
                                            className={`
                                            w-24 h-8 flex items-center justify-center 
                                            rounded-md font-bold ${tendencyInfo.color}
                                        `}
                                        >
                                            {value}
                                        </div>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <button
                                                    onClick={() => modifyTendency(region.id, true)}
                                                    className="text-zinc-400 hover:text-white"
                                                >
                                                    <ArrowUp size={16} />
                                                </button>
                                            </TooltipTrigger>
                                            <TooltipContent>Shift Lighter</TooltipContent>
                                        </Tooltip>
                                    </div>
                                    <Image src={`/soulsborne-tracker/images/des/tendency/${tendencyInfo.id}.jpg`}
                                        alt={tendencyInfo.label} width={48} height={48} />
                                    <div className="text-sm text-zinc-400">
                                        {tendencyInfo.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Character Tendency Section */}
                <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
                    <h2 className="text-2xl font-bold text-amber-500/90 mb-4">Character Tendency</h2>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-6">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => modifyTendency('character', false)} className="text-zinc-400 hover:text-white 
                                    bg-zinc-700/50 hover:bg-zinc-700/70 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                                        <ChevronLeft size={24} />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>Shift Darker</TooltipContent>
                            </Tooltip>
                            <Image
                                src={`/soulsborne-tracker/images/des/tendency/${getTendencyInfo(getTendencyValue('character')).id}.jpg`}
                                alt='Character tendency'
                                width={64}
                                height={64}
                                className="rounded-lg shadow-md"
                            />
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => modifyTendency('character', true)} className="text-zinc-400 hover:text-white 
                                    bg-zinc-700/50 hover:bg-zinc-700/70 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                                        <ChevronRight size={24} />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>Shift Lighter</TooltipContent>
                            </Tooltip>
                        </div>
                        <div className="text-center text-sm text-zinc-400">
                            {getTendencyInfo(getTendencyValue('character')).label}
                        </div>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}