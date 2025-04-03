'use client';
import { BloodGem } from "@/data/bloodGems";
import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { CommandGroup, CommandItem } from "./ui/command";
import Image from "next/image";

interface BloodGemSlot {
    type: 'radial' | 'triangle' | 'waning' | 'circle' | null;
    gemId: string | null;
}

interface WeaponGems {
    weapon: [BloodGemSlot, BloodGemSlot, BloodGemSlot];
    firearm: [BloodGemSlot];
}

export const SearchResults = ({ selectedSlot, weaponGems, getCompatibleGems, selectGem }: {
    selectedSlot: { weapon: 'weapon' | 'firearm'; index: number } | null;
    weaponGems: WeaponGems;
    getCompatibleGems: (type: string | null) => BloodGem[];
    selectGem: (gemId: string) => void;
}) => {
    const [inputValue, setInputValue] = useState('');

    // Subscribe to input changes
    useEffect(() => {
        const input: HTMLInputElement | null = document.querySelector('[cmdk-input]');
        if (!input) return;

        const handleInputChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            setInputValue(target.value);
        };

        input.addEventListener('input', handleInputChange);
        return () => {
            input.removeEventListener('input', handleInputChange);
        };
    }, []);

    if (!selectedSlot) return null;

    const compatibleGems = getCompatibleGems(weaponGems[selectedSlot.weapon][selectedSlot.index].type);

    // Only show results if 3+ characters are typed
    if (inputValue.length < 3) {
        return (
            <div className="p-4 text-center text-zinc-100">
                Type at least 3 characters to search...
            </div>
        );
    }

    return (
        <ScrollArea className="h-72">
            <CommandGroup>
                {compatibleGems.map(gem => (
                    <CommandItem
                        key={gem.id}
                        value={gem.id}
                        onSelect={() => selectGem(gem.id)}
                        className="flex items-center cursor-pointer text-zinc-100"
                    >
                        <Image src={`/soulsborne-tracker/images/bb/bloodGems/${gem.icon}.png`} alt="Gem icon" height={24} width={24} />
                        <span>{gem.name}</span>
                    </CommandItem>
                ))}
            </CommandGroup>
        </ScrollArea>
    );
};