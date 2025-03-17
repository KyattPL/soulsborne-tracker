export interface EquipmentItem {
    id: string;
    name: string;
    category: 'covenant' | 'weapon' | 'armor' | 'consumables' | 'arrows' | 'bolts' | 'rings';
    optionalKey?: string;
}

const DS1_EQ_ITEMS: Array<EquipmentItem> = [
    { id: 'homeward-bone', name: 'Homeward bone', category: 'consumables' },
    { id: 'crown-of-dusk', name: 'Crown of Dusk', category: 'armor', optionalKey: 'armorHead' }
];

export const items: Record<string, Array<EquipmentItem>> = {
    'ds1': DS1_EQ_ITEMS
};