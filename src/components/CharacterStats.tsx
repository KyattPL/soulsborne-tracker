'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

interface PlayerStats {
    soulLevel: number;
    newGamePlusCount: number;
    maxWeaponUpgrade: number;
}

interface CharacterStats {
    vitality: number;
    attunement: number;
    endurance: number;
    strength: number;
    dexterity: number;
    resistance: number;
    intelligence: number;
    faith: number;
}

export default function CharacterStats() {

    const [playerStats, setPlayerStats] = useState<PlayerStats>({
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
    });

    const [charStats, setCharStats] = useState<CharacterStats>({
        vitality: 10,
        attunement: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        resistance: 10,
        intelligence: 10,
        faith: 10,
    });

    useEffect(() => {
        const savedPlayerStats = JSON.parse(localStorage.getItem('playerStats') || 'null');
        const savedCharStats = JSON.parse(localStorage.getItem('charStats') || 'null');
        if (savedPlayerStats) setPlayerStats(savedPlayerStats);
        if (savedCharStats) setCharStats(savedCharStats);
    }, []);

    const updateCharStat = (stat: keyof CharacterStats, change: number) => {
        const newStats = {
            ...charStats,
            [stat]: Math.max(0, charStats[stat] + change)
        };
        setCharStats(newStats);
        localStorage.setItem('charStats', JSON.stringify(newStats));
    };

    const updatePlayerStat = (stat: keyof PlayerStats, change: number) => {
        const newStats = {
            ...playerStats,
            [stat]: Math.max(0, playerStats[stat] + change)
        };
        setPlayerStats(newStats);
        localStorage.setItem('playerStats', JSON.stringify(newStats));
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
                <CardTitle className="text-xl font-ancient-runes tracking-wider text-amber-500/90 flex justify-center items-center gap-8">
                    <Image src="/images/ds1/charStats.png" alt="DS1 status logo" width={80} height={80} />
                    Character Stats
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
                                    <span className="text-amber-500 w-8 text-center">{playerStats.soulLevel}</span>
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
                                    <span className="text-amber-500 w-8 text-center">{playerStats.newGamePlusCount}</span>
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
                                    <span className="text-amber-500 w-8 text-center">+{playerStats.maxWeaponUpgrade}</span>
                                    <StatButton
                                        onClick={() => updatePlayerStat('maxWeaponUpgrade', 1)}
                                        icon={Plus}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {Object.keys(charStats).map(key => (
                            <div key={key}>
                                <div className="flex justify-between items-center">
                                    <Image src={`/images/ds1/stat_${key}.jpg`} alt={`${key} stat icon`} width={32} height={32} />
                                    <span className="text-zinc-300">{key[0].toUpperCase() + key.slice(1)}</span>
                                    <div className="flex items-center">
                                        <StatButton
                                            onClick={() => updateCharStat(key as keyof CharacterStats, -1)}
                                            icon={Minus}
                                        />
                                        <span className="text-amber-500 w-8 text-center">{charStats[key as keyof CharacterStats]}</span>
                                        <StatButton
                                            onClick={() => updateCharStat(key as keyof CharacterStats, 1)}
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