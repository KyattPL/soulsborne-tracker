'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

interface CharacterStats {
    soulLevel: number;
    newGamePlusCount: number;
    vitality: number;
    attunement: number;
    endurance: number;
    strength: number;
    dexterity: number;
    resistance: number;
    intelligence: number;
    faith: number;
    maxWeaponUpgrade: number;
}

export default function CharacterStats() {
    const [stats, setStats] = useState<CharacterStats>({
        soulLevel: 1,
        newGamePlusCount: 0,
        vitality: 10,
        attunement: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        resistance: 10,
        intelligence: 10,
        faith: 10,
        maxWeaponUpgrade: 0
    });

    useEffect(() => {
        const savedStats = JSON.parse(localStorage.getItem('characterStats') || 'null');
        if (savedStats) setStats(savedStats);
    }, []);

    const updateStat = (stat: keyof CharacterStats, change: number) => {
        const newStats = {
            ...stats,
            [stat]: Math.max(0, stats[stat] + change)
        };
        setStats(newStats);
        localStorage.setItem('characterStats', JSON.stringify(newStats));
    };

    const StatButton = ({ onClick, icon: Icon }: { onClick: () => void, icon: typeof Plus }) => (
        <button
            onClick={onClick}
            className="bg-zinc-700/50 hover:bg-zinc-600/50 p-1.5 rounded transition-colors duration-200 text-zinc-400 hover:text-zinc-200"
        >
            <Icon size={14} />
        </button>
    );

    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
            <CardHeader className="border-b border-zinc-700/50">
                <CardTitle className="text-xl font-ancient-runes tracking-wider text-amber-500/90">
                    Character Stats
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <div className="stat-group">
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-300">Soul Level</span>
                                <div className="flex items-center space-x-3">
                                    <StatButton
                                        onClick={() => updateStat('soulLevel', -1)}
                                        icon={Minus}
                                    />
                                    <span className="text-amber-500 w-8 text-center">{stats.soulLevel}</span>
                                    <StatButton
                                        onClick={() => updateStat('soulLevel', 1)}
                                        icon={Plus}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="stat-group">
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-300">NG+ Cycle</span>
                                <div className="flex items-center space-x-3">
                                    <StatButton
                                        onClick={() => updateStat('newGamePlusCount', -1)}
                                        icon={Minus}
                                    />
                                    <span className="text-amber-500 w-8 text-center">{stats.newGamePlusCount}</span>
                                    <StatButton
                                        onClick={() => updateStat('newGamePlusCount', 1)}
                                        icon={Plus}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="stat-group">
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-300">Weapon Level</span>
                                <div className="flex items-center space-x-3">
                                    <StatButton
                                        onClick={() => updateStat('maxWeaponUpgrade', -1)}
                                        icon={Minus}
                                    />
                                    <span className="text-amber-500 w-8 text-center">+{stats.maxWeaponUpgrade}</span>
                                    <StatButton
                                        onClick={() => updateStat('maxWeaponUpgrade', 1)}
                                        icon={Plus}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {[
                            { name: 'Vitality', key: 'vitality' },
                            { name: 'Endurance', key: 'endurance' },
                            { name: 'Strength', key: 'strength' },
                            { name: 'Dexterity', key: 'dexterity' }
                        ].map(({ name, key }) => (
                            <div key={key} className="stat-group">
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-300">{name}</span>
                                    <div className="flex items-center space-x-3">
                                        <StatButton
                                            onClick={() => updateStat(key as keyof CharacterStats, -1)}
                                            icon={Minus}
                                        />
                                        <span className="text-amber-500 w-8 text-center">{stats[key as keyof CharacterStats]}</span>
                                        <StatButton
                                            onClick={() => updateStat(key as keyof CharacterStats, 1)}
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