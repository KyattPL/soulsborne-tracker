'use client';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useProgress } from '@/components/ProgressProvider';
import { KeyToStatName } from '@/types/progress.types';
import { updateCharStatGuarded, updatePlayerStatGuarded } from '@/utils/progressGuards';

export default function CharacterStats({ gameKey }: { gameKey: string }) {
    const { progress, isSharedLink, updateProgress } = useProgress();


    const updateCharStat = (stat: string, change: number) => {
        if (isSharedLink) return; // Prevent modifications when viewing shared progress

        updateCharStatGuarded(stat, progress, change, updateProgress);
    };

    const updatePlayerStat = (stat: string, change: number) => {
        if (isSharedLink) return; // Prevent modifications when viewing shared progress

        updatePlayerStatGuarded(stat, progress, change, updateProgress);
    };

    const StatButton = ({ onClick, icon: Icon }: { onClick: () => void, icon: typeof Plus }) => (
        <button
            onClick={onClick}
            className={`bg-zinc-700/50 hover:bg-zinc-600/50 p-1.5 rounded transition-colors duration-200 text-zinc-400 hover:text-zinc-200 
                ${isSharedLink ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSharedLink}
        >
            <Icon size={14} />
        </button>
    );

    return (
        <ScrollArea type='always' className='h-full'>
            <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
                <CardHeader className="border-b border-zinc-700/50 p-2">
                    <CardTitle className="text-xl font-ancient-runes tracking-wider text-amber-500/90 flex justify-center items-center gap-4">
                        <Image src={`/soulsborne-tracker/images/${gameKey}/charStats.jpg`} alt={`${gameKey} stats logo`} style={{ width: 60, height: 80 }} width={60} height={80} />
                        Character Stats
                        {isSharedLink && (
                            <span className="text-sm font-normal text-zinc-400">(Viewing Shared Progress)</span>
                        )}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-8">
                            {Object.keys(progress.playerStats).map(key => (
                                <div key={key}>
                                    <div className="flex justify-between items-center">
                                        <Image src={`/soulsborne-tracker/images/${gameKey}/stat_${key}.jpg`} alt={`${key} stat icon`} width={32} height={32} />
                                        <span className="text-zinc-300">{KeyToStatName[gameKey][key]}</span>
                                        <div className="flex items-center">
                                            <StatButton
                                                onClick={() => updatePlayerStat(key as keyof typeof progress.playerStats, -1)}
                                                icon={Minus}
                                            />
                                            <span className="text-amber-500 w-8 text-center">
                                                {key === 'weaponUpgradeLvl' || key === 'estusUpgrade' || key === 'spiritAshUpgradeLvl' ? '+' : ''}
                                                {progress.playerStats[key as keyof typeof progress.playerStats]}
                                            </span>
                                            <StatButton
                                                onClick={() => updatePlayerStat(key as keyof typeof progress.playerStats, 1)}
                                                icon={Plus}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-8">
                            {Object.keys(progress.charStats).map(key => (
                                <div key={key}>
                                    <div className="flex justify-between items-center">
                                        <Image src={`/soulsborne-tracker/images/${gameKey}/stat_${key}.jpg`} alt={`${key} stat icon`} width={32} height={32} />
                                        <span className="text-zinc-300">{KeyToStatName[gameKey][key]}</span>
                                        <div className="flex items-center">
                                            <StatButton
                                                onClick={() => updateCharStat(key as keyof typeof progress.charStats, -1)}
                                                icon={Minus}
                                            />
                                            <span className="text-amber-500 w-8 text-center">{progress.charStats[key as keyof typeof progress.charStats]}</span>
                                            <StatButton
                                                onClick={() => updateCharStat(key as keyof typeof progress.charStats, 1)}
                                                icon={Plus}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </ScrollArea>
    );
}