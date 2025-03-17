export interface EquipmentSection {
    category: string;
    slots: Array<{ key: string; label: string }>;
}

const DarkSouls1Sections: EquipmentSection[] = [
    {
        category: 'covenant',
        slots: [
            { key: 'covenant', label: 'Covenant' }
        ],
    },
    {
        category: 'weapon',
        slots: [
            { key: 'left1', label: 'Left 1' },
            { key: 'left2', label: 'Left 2' }
        ]
    },
    {
        category: 'weapon',
        slots: [
            { key: 'right1', label: 'Right 1' },
            { key: 'right2', label: 'Right 2' },
        ]
    },
    {
        category: 'armor',
        slots: [
            { key: 'armorHead', label: 'Head armor' },
            { key: 'armorChest', label: 'Chest armor' },
            { key: 'armorArms', label: 'Arms armor' },
            { key: 'armorLegs', label: 'Legs armor' },
        ]
    },
    {
        category: 'consumables',
        slots: [
            { key: 'consumable1', label: 'Consumable 1' },
            { key: 'consumable2', label: 'Consumable 1' },
            { key: 'consumable3', label: 'Consumable 1' },
            { key: 'consumable4', label: 'Consumable 1' },
            { key: 'consumable5', label: 'Consumable 1' },
        ]
    },
    {
        category: 'arrows',
        slots: [
            { key: 'arrow1', label: 'Arrow 1' },
            { key: 'arrow2', label: 'Arrow 2' },
        ]
    },
    {
        category: 'bolts',
        slots: [
            { key: 'bolt1', label: 'Bolt 1' },
            { key: 'bolt2', label: 'Bolt 2' },
        ]
    },
    {
        category: 'rings',
        slots: [
            { key: 'ring1', label: 'Ring 1' },
            { key: 'ring2', label: 'Ring 2' },
        ]
    },
];

export interface DarkSouls1Equipment {
    [key: string]: string | undefined;
    covenant?: string;
    left1?: string;
    left2?: string;
    right1?: string;
    right2?: string;
    armorHead?: string;
    armorChest?: string;
    armorArms?: string;
    armorLegs?: string;
    consumable1?: string;
    consumable2?: string;
    consumable3?: string;
    consumable4?: string;
    consumable5?: string;
    arrow1?: string;
    arrow2?: string;
    bolt1?: string;
    bolt2?: string;
    ring1?: string;
    ring2?: string;
}

export const KeyToEquipmentSections: Record<string, EquipmentSection[]> = {
    'ds1': DarkSouls1Sections
};