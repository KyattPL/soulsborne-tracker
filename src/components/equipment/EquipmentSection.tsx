'use client';
import EquipmentSlot from '@/components/equipment/EquipmentSlot';

interface EquipmentSectionProps {
    gameKey: string;
    category: string;
    slots: Array<{ key: string; label: string }>;
    hasBorder: boolean;
}

export default function EquipmentSection({ gameKey, category, slots, hasBorder }: EquipmentSectionProps) {

    const gridCols = () => {
        if (slots.length === 1) return 'grid-cols-1';
        if (slots.length === 2) return 'grid-cols-2';
        if (slots.length === 3) return 'grid-cols-3';
        if (slots.length === 4) return 'grid-cols-2 md:grid-cols-4';
        if (slots.length === 6) return 'grid-cols-2 md:grid-cols-3';
        return 'grid-cols-2';
    };

    return (
        <div className={`${hasBorder ? 'border-b border-zinc-700/50 pb-4' : ''}`}>
            <h3 className="text-zinc-300 font-semibold mb-2">{category[0].toUpperCase() + category.slice(1)}</h3>
            <div className={`grid ${gridCols()} gap-4`}>
                {slots.map((slot) => (
                    <EquipmentSlot
                        key={slot.key}
                        gameKey={gameKey}
                        slotKey={slot.key}
                        label={slot.label}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
}