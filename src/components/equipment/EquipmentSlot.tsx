'use client';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useProgress } from '@/components/ProgressProvider';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getEquipmentItems } from '@/utils/equipmentUtils';
import { getEqItemIdGuarded } from '@/utils/progressGuards';

interface EquipmentSlotProps {
    gameKey: string;
    slotKey: string;
    label: string;
    category: string;
}

export default function EquipmentSlot({ gameKey, slotKey, label, category }: EquipmentSlotProps) {
    const { progress, isSharedLink, updateProgress } = useProgress();

    const updateEquipment = (itemId: string) => {
        if (isSharedLink) return;

        const newProgress = { ...progress };
        if (!newProgress.equipment) newProgress.equipment = {};

        newProgress.equipment = {
            ...progress.equipment,
            [slotKey]: itemId
        };
        updateProgress(newProgress);
    };

    const currentItemId = getEqItemIdGuarded(progress, slotKey);
    const items = getEquipmentItems(gameKey, category, slotKey);
    const currentItem = items?.find(item => item.id === currentItemId);

    return (
        <div className="flex flex-col gap-2">
            <span className="text-zinc-400 text-sm">{label}</span>
            <div className="flex items-center gap-2">
                <div className={`w-12 h-12 bg-zinc-700/50 rounded-md overflow-hidden flex items-center justify-center`}>
                    {currentItemId && currentItemId !== 'none' ? (
                        <Image
                            src={`/soulsborne-tracker/images/${gameKey}/eqItems/${category}_${currentItemId}.jpg`}
                            alt={`${label} icon`}
                            width={48}
                            height={48}
                        />
                    ) : (
                        <span className="text-xs text-zinc-500">-</span>
                    )}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild disabled={isSharedLink}>
                        <Button
                            variant="outline"
                            className={`flex-1 justify-between bg-zinc-700/30 border-zinc-600/50 hover:bg-zinc-600/50 hover:text-zinc-200
                ${isSharedLink ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <span className="truncate">
                                {currentItem?.name || 'None'}
                            </span>
                            <ChevronDown size={16} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-zinc-800 border-zinc-700">
                        {items?.map(item => (
                            <DropdownMenuItem
                                key={item.id}
                                onClick={() => updateEquipment(item.id)}
                                className="text-zinc-300 hover:text-amber-500 hover:bg-zinc-700/70"
                            >
                                {item.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}