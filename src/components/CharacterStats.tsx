'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { useProgress } from '@/components/ProgressProvider';

export default function CharacterStats() {
    const { progress, isUrlProgress, isOnline, canEdit, updateProgress } = useProgress();

    // const _saveStats = (key: 'charStats' | 'playerStats', newStats: typeof progress.charStats | typeof progress.playerStats) => {
    //     localStorage.setItem(key, JSON.stringify(newStats));
    // }

    const updateCharStat = (stat: keyof typeof progress.charStats, change: number) => {
        if (isUrlProgress) return; // Prevent modifications when viewing shared progress
        if (isOnline && !canEdit) return;

        const newStats = {
            ...progress.charStats,
            [stat]: Math.max(0, progress.charStats[stat] + change)
        };

        updateProgress({
            charStats: { ...newStats }
        });
    };

    const updatePlayerStat = (stat: keyof typeof progress.playerStats, change: number) => {
        if (isUrlProgress) return; // Prevent modifications when viewing shared progress
        if (isOnline && !canEdit) return;

        const newStats = {
            ...progress.playerStats,
            [stat]: Math.max(0, progress.playerStats[stat] + change)
        };

        updateProgress({
            playerStats: { ...newStats }
        });
    };

    const StatButton = ({ onClick, icon: Icon }: { onClick: () => void, icon: typeof Plus }) => (
        <button
            onClick={onClick}
            className={`bg-zinc-700/50 hover:bg-zinc-600/50 p-1.5 rounded transition-colors duration-200 text-zinc-400 hover:text-zinc-200 
                ${isUrlProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isUrlProgress}
        >
            <Icon size={14} />
        </button>
    );

    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm h-full">
            <CardHeader className="border-b border-zinc-700/50">
                <CardTitle className="text-xl font-ancient-runes tracking-wider text-amber-500/90 flex justify-center items-center gap-4">
                    <Image src="/images/ds1/charStats.png" alt="DS1 status logo" width={80} height={80} />
                    Character Stats
                    {isUrlProgress && (
                        <span className="text-sm font-normal text-zinc-400">(Viewing Shared Progress)</span>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <div className="stat-group">
                            <div className="flex justify-between items-center">
                                <Image src="/images/ds1/soullvl.png" alt="Soul level icon" width={32} height={32} />
                                <span className="text-zinc-300">Soul Level</span>
                                <div className="flex items-center">
                                    <StatButton
                                        onClick={() => updatePlayerStat('soulLevel', -1)}
                                        icon={Minus}
                                    />
                                    <span className="text-amber-500 w-8 text-center">{progress.playerStats.soulLevel}</span>
                                    <StatButton
                                        onClick={() => updatePlayerStat('soulLevel', 1)}
                                        icon={Plus}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="stat-group">
                            <div className="flex justify-between items-center">
                                <Image src="/images/ds1/stat_ng.png" alt="New game plus icon" width={32} height={32} />
                                <span className="text-zinc-300">NG+ Cycle</span>
                                <div className="flex items-center">
                                    <StatButton
                                        onClick={() => updatePlayerStat('newGamePlusCount', -1)}
                                        icon={Minus}
                                    />
                                    <span className="text-amber-500 w-8 text-center">{progress.playerStats.newGamePlusCount}</span>
                                    <StatButton
                                        onClick={() => updatePlayerStat('newGamePlusCount', 1)}
                                        icon={Plus}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="stat-group">
                            <div className="flex justify-between items-center">
                                <Image src="/images/ds1/stat_weapon.png" alt="Weapon stat icon" width={32} height={32} />
                                <span className="text-zinc-300">Weapon lvl</span>
                                <div className="flex items-center">
                                    <StatButton
                                        onClick={() => updatePlayerStat('maxWeaponUpgrade', -1)}
                                        icon={Minus}
                                    />
                                    <span className="text-amber-500 w-8 text-center">+{progress.playerStats.maxWeaponUpgrade}</span>
                                    <StatButton
                                        onClick={() => updatePlayerStat('maxWeaponUpgrade', 1)}
                                        icon={Plus}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {Object.keys(progress.charStats).map(key => (
                            <div key={key}>
                                <div className="flex justify-between items-center">
                                    <Image src={`/images/ds1/stat_${key}.jpg`} alt={`${key} stat icon`} width={32} height={32} />
                                    <span className="text-zinc-300">{key[0].toUpperCase() + key.slice(1)}</span>
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
    );
}