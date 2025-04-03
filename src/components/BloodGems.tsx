'use client';

import { useState } from 'react';
import {
    DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger,
    DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Command, CommandInput, CommandList } from '@/components/ui/command';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

import { useProgress } from './ProgressProvider';
import { bloodGemData } from '@/data/bloodGems';
import { isBloodborneProgress } from '@/utils/progressGuards';
import { X } from 'lucide-react';
import Image from 'next/image';
import { SearchResults } from './BloodGemSearch';

interface BloodGemSlot {
    type: 'radial' | 'triangle' | 'waning' | 'circle' | null;
    gemId: string | null;
}

interface WeaponGems {
    weapon: [BloodGemSlot, BloodGemSlot, BloodGemSlot];
    firearm: [BloodGemSlot];
}

// Define the gem icon components by type
const GemIcon = ({ type }: { type: string | null }) => {
    if (!type) return null;

    return <Image src={`/soulsborne-tracker/images/bb/imprint-${type}.jpg`} width={32} height={32} alt="Imprint icon" />
};

export default function BloodGemsTab() {
    const { progress, updateProgress, isSharedLink } = useProgress();

    const [isOpenWeapDialog, setIsOpenWeapDialog] = useState(false);
    const [isOpenGunDialog, setIsOpenGunDialog] = useState(false);

    const initGems = isBloodborneProgress(progress) ? progress.bloodGems : {
        weapon: [
            { type: null, gemId: null },
            { type: null, gemId: null },
            { type: null, gemId: null }
        ],
        firearm: [{ type: null, gemId: null }]
    } as WeaponGems;

    const [weaponGems, setWeaponGems] = useState<WeaponGems>(initGems);

    const [selectedSlot, setSelectedSlot] = useState<{
        weapon: 'weapon' | 'firearm';
        index: number;
    } | null>(null);

    const handleSlotTypeChange = (value: 'radial' | 'triangle' | 'waning' | 'circle', weapon: 'weapon' | 'firearm', index: number) => {
        if (isSharedLink || !isBloodborneProgress(progress)) return;

        const newGems = { ...weaponGems };
        newGems[weapon][index].type = value;
        newGems[weapon][index].gemId = null; // Reset gem when type changes

        setWeaponGems(newGems);

        // Update progress
        updateProgress({
            ...progress,
            bloodGems: newGems
        });
    };

    const selectGem = (gemId: string) => {
        if (!selectedSlot || isSharedLink || !isBloodborneProgress(progress)) return;

        const { weapon, index } = selectedSlot;
        const newGems = { ...weaponGems };
        newGems[weapon][index].gemId = gemId;

        setWeaponGems(newGems);
        setIsOpenWeapDialog(false);
        setIsOpenGunDialog(false);

        // Update progress
        updateProgress({
            ...progress,
            bloodGems: newGems
        });
    };

    const removeGem = (weapon: 'weapon' | 'firearm', index: number) => {
        if (isSharedLink || !isBloodborneProgress(progress)) return;

        const newGems = { ...weaponGems };
        newGems[weapon][index].gemId = null;

        setWeaponGems(newGems);

        // Update progress
        updateProgress({
            ...progress,
            bloodGems: newGems
        });
    };

    const getGemById = (id: string | null) => {
        if (!id) return null;
        return bloodGemData.find(gem => gem.id === id);
    };

    // Filter gems by slot type
    const getCompatibleGems = (type: string | null) => {
        if (!type) return [];
        return bloodGemData.filter(gem => gem.category === type);
    };

    return (

        <TooltipProvider>
            <div className="space-y-8">
                {/* Trick Weapon Section */}
                <div className="border border-zinc-700/50 rounded-lg p-6">
                    <div className="flex gap-4 items-center mb-4">
                        <Image alt="Weapon img" src="/soulsborne-tracker/images/bb/weapon.jpg" width={64} height={64} />
                        <h3 className="text-2xl font-semibold text-zinc-200">Trick Weapon</h3>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-4">
                            <Dialog open={isOpenWeapDialog} onOpenChange={setIsOpenWeapDialog}>
                                <div className="relative flex gap-8">
                                    {weaponGems.weapon.map((slot, index) => (
                                        <DialogTrigger key={index} asChild disabled={!slot.type}>
                                            <div
                                                className={`
                                                            w-32 h-32 rounded 
                                                            ${slot.type
                                                        ? 'border-2 border-zinc-500'
                                                        : 'border border-dashed border-zinc-600'}
                                                            ${slot.gemId ? 'bg-zinc-700' : 'bg-zinc-800/50'}
                                                            flex items-center justify-center
                                                            cursor-pointer hover:border-amber-500/70
                                                            transition-colors
                                                            ${isSharedLink ? 'pointer-events-none' : ''}
                                                            relative
                                                        `}
                                                onClick={(e) => {
                                                    if (!slot.type) {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        return;
                                                    }
                                                    setSelectedSlot({ weapon: 'weapon', index });
                                                }}
                                            >
                                                {/* Slot type selector in top-right corner */}
                                                <div className="absolute -top-1 -right-1 z-10">
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div
                                                                className="w-10 h-10 bg-zinc-800 border border-zinc-600 rounded-md flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition-colors"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                }}
                                                            >
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger
                                                                        disabled={isSharedLink}
                                                                        className="w-10 h-10 border-0 bg-zinc-800 border-zinc-600 rounded-md flex items-center justify-center hover:bg-zinc-700 transition-colors focus:outline-none"
                                                                    >
                                                                        {slot.type ? (
                                                                            <div className="flex items-center justify-center">
                                                                                <GemIcon type={slot.type} />
                                                                            </div>
                                                                        ) : (
                                                                            <span className="text-lg text-zinc-200">+</span>
                                                                        )}
                                                                    </DropdownMenuTrigger>
                                                                    <DropdownMenuContent align="end">
                                                                        <DropdownMenuLabel>Slot Type</DropdownMenuLabel>
                                                                        <DropdownMenuSeparator />
                                                                        <DropdownMenuItem onClick={() => handleSlotTypeChange("radial", 'weapon', index)}>
                                                                            <div className="flex items-center gap-2">
                                                                                <GemIcon type="radial" />
                                                                                <span>Radial</span>
                                                                            </div>
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem onClick={() => handleSlotTypeChange("triangle", 'weapon', index)}>
                                                                            <div className="flex items-center gap-2">
                                                                                <GemIcon type="triangle" />
                                                                                <span>Triangle</span>
                                                                            </div>
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem onClick={() => handleSlotTypeChange("waning", 'weapon', index)}>
                                                                            <div className="flex items-center gap-2">
                                                                                <GemIcon type="waning" />
                                                                                <span>Waning</span>
                                                                            </div>
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem onClick={() => handleSlotTypeChange("circle", 'weapon', index)}>
                                                                            <div className="flex items-center gap-2">
                                                                                <GemIcon type="circle" />
                                                                                <span>Circle</span>
                                                                            </div>
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Select slot type</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </div>

                                                {slot.gemId ? (
                                                    <div className="relative w-full h-full flex items-center justify-center">
                                                        <Image src={`/soulsborne-tracker/images/bb/bloodGems/${getGemById(slot.gemId)?.icon}.png`} alt="Gem icon" width={128} height={128} />
                                                        <button
                                                            className="absolute -top-1 -left-1 bg-red-800 rounded-full p-1 hover:bg-red-700 transition-colors"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                removeGem('weapon', index);
                                                            }}
                                                        >
                                                            <X size={12} />
                                                        </button>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </DialogTrigger>
                                    ))}
                                    <DialogContent className="bg-zinc-800 border-zinc-700">
                                        <DialogHeader>
                                            <DialogTitle>Select Blood Gem</DialogTitle>
                                        </DialogHeader>
                                        <Command className="bg-zinc-700 text-zinc-100">
                                            <CommandInput placeholder="Search gems (type at least 3 characters)..." />
                                            <CommandList>
                                                <SearchResults
                                                    selectedSlot={selectedSlot}
                                                    weaponGems={weaponGems}
                                                    getCompatibleGems={getCompatibleGems}
                                                    selectGem={selectGem}
                                                />
                                            </CommandList>
                                        </Command>
                                    </DialogContent>
                                </div>
                            </Dialog>
                        </div>
                    </div>
                </div>

                {/* Firearm Section */}
                <div className="border border-zinc-700/50 rounded-lg p-6">
                    <div className="flex gap-4 items-center mb-4">
                        <Image alt="Firearm img" src="/soulsborne-tracker/images/bb/firearm.jpg" width={64} height={64} />
                        <h3 className="text-2xl font-semibold text-zinc-200">Firearm</h3>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-4">
                            <Dialog open={isOpenGunDialog} onOpenChange={setIsOpenGunDialog}>
                                <div className="relative">
                                    {weaponGems.firearm.map((slot, index) => (
                                        <DialogTrigger key={index} asChild>
                                            <div
                                                className={`
                                                            w-32 h-32 rounded 
                                                            border-2 border-zinc-500
                                                            ${slot.gemId ? 'bg-zinc-700' : 'bg-zinc-800/50'}
                                                            flex items-center justify-center
                                                            cursor-pointer hover:border-amber-500/70
                                                            transition-colors
                                                            ${isSharedLink ? 'pointer-events-none' : ''}
                                                            relative
                                                        `}
                                                onClick={() => {
                                                    if (!isSharedLink && isBloodborneProgress(progress)) {
                                                        // For firearm, always set type to circle
                                                        const newGems = { ...weaponGems };
                                                        newGems.firearm[index].type = 'circle';
                                                        setWeaponGems(newGems);

                                                        // Update progress
                                                        updateProgress({
                                                            ...progress,
                                                            bloodGems: newGems
                                                        });

                                                        setSelectedSlot({ weapon: 'firearm', index });
                                                    }
                                                }}
                                            >
                                                {/* Circle slot type indicator in top-right corner */}
                                                <div className="absolute -top-1 -right-1 z-10">
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div className="w-10 h-10 bg-zinc-800 border border-zinc-600 rounded-md flex items-center justify-center">
                                                                <GemIcon type="circle" />
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Circle slot (fixed)</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </div>

                                                {slot.gemId ? (
                                                    <div className="relative w-full h-full flex items-center justify-center">
                                                        <Image src={`/soulsborne-tracker/images/bb/bloodGems/${getGemById(slot.gemId)?.icon}.png`} alt="Gem icon" width={128} height={128} />
                                                        <button
                                                            className="absolute -top-1 -left-1 bg-red-800 rounded-full p-1 hover:bg-red-700 transition-colors"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                removeGem('firearm', index);
                                                            }}
                                                        >
                                                            <X size={12} />
                                                        </button>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </DialogTrigger>
                                    ))}
                                    <DialogContent className="bg-zinc-800 border-zinc-700">
                                        <DialogHeader>
                                            <DialogTitle>Select Blood Gem</DialogTitle>
                                        </DialogHeader>
                                        <Command className="bg-zinc-700 text-zinc-100">
                                            <CommandInput placeholder="Search gems (type at least 3 characters)..." />
                                            <CommandList>
                                                <SearchResults
                                                    selectedSlot={selectedSlot}
                                                    weaponGems={weaponGems}
                                                    getCompatibleGems={getCompatibleGems}
                                                    selectGem={selectGem}
                                                />
                                            </CommandList>
                                        </Command>
                                    </DialogContent>
                                </div>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}