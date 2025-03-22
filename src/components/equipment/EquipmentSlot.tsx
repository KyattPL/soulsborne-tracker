'use client';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { useProgress } from '@/components/ProgressProvider';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandInput, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '../ui/scroll-area';
import { getEquipmentItems } from '@/utils/equipmentUtils';
import { getEqItemIdGuarded } from '@/utils/progressGuards';
import { EquipmentItem } from '@/data/equipmentItems';

interface EquipmentSlotProps {
    gameKey: string;
    slotKey: string;
    label: string;
    category: string;
}

export default function EquipmentSlot({ gameKey, slotKey, label, category }: EquipmentSlotProps) {
    const [open, setOpen] = useState(false)
    const { progress, isSharedLink, updateProgress } = useProgress();

    const updateEquipment = (itemId: string) => {
        if (isSharedLink) return;

        const newProgress = { ...progress };
        if (!newProgress.equipment) newProgress.equipment = {};

        let checkedId;

        if (itemId === 'none') {
            checkedId = undefined;
        } else {
            checkedId = itemId;
        }

        newProgress.equipment = {
            ...progress.equipment,
            [slotKey]: checkedId
        };
        updateProgress(newProgress);
    };

    const currentItemId = getEqItemIdGuarded(progress, slotKey);
    let items = getEquipmentItems(gameKey, category, slotKey);
    const currentItem = items?.find(item => item.id === currentItemId);

    items = [{ "category": 'armor', "id": "none", "name": "None" } as EquipmentItem].concat(items);

    return (
        <div className="flex flex-col gap-2">
            <span className="text-zinc-400 text-sm">{label}</span>
            <div className="flex items-center gap-2">
                <div className={`w-12 h-12 bg-zinc-700/50 rounded-md overflow-hidden flex items-center justify-center`}>
                    {currentItemId && currentItemId !== 'none' ? (
                        <Image
                            src={`/soulsborne-tracker/images/${gameKey}/eqItems/${category}/${currentItemId}.jpg`}
                            alt={`${label} icon`}
                            width={48}
                            height={48}
                        />
                    ) : (
                        <span className="text-xs text-zinc-500">-</span>
                    )}
                </div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild disabled={isSharedLink}>
                        <Button
                            variant="outline"
                            className={`flex-1 justify-between bg-zinc-700/30 border-zinc-600/50 hover:bg-zinc-600/50 hover:text-zinc-200
                ${isSharedLink ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <span className="truncate text-zinc-200">
                                {currentItem?.name || 'None'}
                            </span>
                            <ChevronDown size={16} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-zinc-800 border-zinc-700">
                        <Command className="bg-zinc-700 text-zinc-100">
                            <CommandInput placeholder="Search" />
                            <CommandList>
                                <CommandEmpty>No item found</CommandEmpty>
                                <CommandGroup>
                                    <ScrollArea className='h-48'>
                                        {items?.map(item => (
                                            <CommandItem
                                                key={item.id}
                                                value={item.id}
                                                onSelect={() => {
                                                    updateEquipment(item.id);
                                                    setOpen(false);
                                                }}
                                                className="text-zinc-300 hover:text-amber-500 hover:bg-zinc-700/70"
                                            >
                                                {item.name}
                                            </CommandItem>
                                        ))}
                                    </ScrollArea>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div >
    );
}