import { KeyToEquipmentSections, EquipmentSection } from "@/types/equipment.types";
import { items, EquipmentItem } from "@/data/equipmentItems";

export function getEquipmentSections(gameKey: string): EquipmentSection[] {
    return KeyToEquipmentSections[gameKey];
}

export function getEquipmentItems(gameKey: string, category: string, slotKey: string): EquipmentItem[] {
    const unpackedItems = items[gameKey];

    if (category === 'armor') {
        return unpackedItems.filter(i => i.optionalKey === slotKey);
    } else {
        return unpackedItems.filter(i => i.category === category);
    }
}