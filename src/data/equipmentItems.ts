import { DES_EQ_ITEMS } from "./equipment/des_eq";
import { DS1_EQ_ITEMS } from "./equipment/ds1_eq";
import { DS2_EQ_ITEMS } from "./equipment/ds2_eq";

export interface EquipmentItem {
    id: string;
    name: string;
    category: 'covenant' | 'weapon' | 'firearm' | 'rune' | 'armor' | 'consumables' | 'arrows' | 'bolts' | 'rings' | 'spells' | 'talisman' | 'spiritAsh';
    optionalKey?: 'armorHead' | 'armorChest' | 'armorArms' | 'armorLegs';
}

const DS3_EQ_ITEMS: Array<EquipmentItem> = [
    { id: 'homeward-bone', name: 'Homeward bone', category: 'consumables' },
    { id: 'crown-of-dusk', name: 'Crown of Dusk', category: 'armor', optionalKey: 'armorHead' }
];

const BB_EQ_ITEMS: Array<EquipmentItem> = [
    { id: 'homeward-bone', name: 'Homeward bone', category: 'consumables' },
    { id: 'crown-of-dusk', name: 'Crown of Dusk', category: 'armor', optionalKey: 'armorHead' }
];

const ELDEN_EQ_ITEMS: Array<EquipmentItem> = [
    { id: 'homeward-bone', name: 'Homeward bone', category: 'consumables' },
    { id: 'crown-of-dusk', name: 'Crown of Dusk', category: 'armor', optionalKey: 'armorHead' }
];

export const items: Record<string, Array<EquipmentItem>> = {
    'ds1': DS1_EQ_ITEMS,
    'ds2': DS2_EQ_ITEMS,
    'ds3': DS3_EQ_ITEMS,
    'des': DES_EQ_ITEMS,
    'bb': BB_EQ_ITEMS,
    'elden': ELDEN_EQ_ITEMS
};