import { ChaliceName } from "@/data/chalices";
import {
    DarkSouls1Equipment, DarkSouls2Equipment, DarkSouls3Equipment,
    DemonsSoulsEquipment, BloodborneEquipment, EldenRingEquipment
} from "./equipment.types";

export type GameTitle =
    | 'Dark Souls 1'
    | 'Dark Souls 2'
    | 'Dark Souls 3'
    | 'Elden Ring'
    | 'Bloodborne'
    | 'Sekiro'
    | "Demon's Souls";

interface Bonfire {
    id: number;
    name: string;
    location: string;
    unlocked: boolean;
}

// Base interface that can be extended for each game
export interface GameSpecificProgress {
    game: GameTitle;
    charStats: object;
    playerStats: object;
    equipment: object;
    bonfires: Bonfire[];
    bossesAttempts: Array<{
        id: string;
        name: string;
        attempts: number;
        defeated: boolean;
    }>;
    customTrackers: Array<{
        id: string;
        name: string;
        total: number;
        current: number;
        color: string;
    }>;
}

// Dark Souls 1 Specific Progress
export interface DarkSouls1Progress extends GameSpecificProgress {
    game: 'Dark Souls 1';
    equipment: DarkSouls1Equipment;
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        weaponUpgradeLvl: number;
    };
    charStats: {
        vitality: number;
        attunement: number;
        endurance: number;
        strength: number;
        dexterity: number;
        resistance: number;
        intelligence: number;
        faith: number;
    };
}

export interface DarkSouls2Progress extends GameSpecificProgress {
    game: 'Dark Souls 2';
    equipment: DarkSouls2Equipment;
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        weaponUpgradeLvl: number;
        estusAmount: number;
        estusUpgrade: number;
    };
    charStats: {
        vigor: number;
        endurance: number;
        vitality: number;
        attunement: number;
        strength: number;
        dexterity: number;
        adaptability: number;
        intelligence: number;
        faith: number;
    };
}

export interface DarkSouls3Progress extends GameSpecificProgress {
    game: 'Dark Souls 3';
    equipment: DarkSouls3Equipment;
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        weaponUpgradeLvl: number;
        estusAmount: number;
        estusUpgrade: number;
    };
    charStats: {
        vigor: number;
        attunement: number;
        endurance: number;
        vitality: number;
        strength: number;
        dexterity: number;
        intelligence: number;
        faith: number;
        luck: number;
    };
}

interface BloodGemSlot {
    type: 'radial' | 'triangle' | 'waning' | 'circle' | null;
    gemId: string | null;
}

interface WeaponGems {
    weapon: [BloodGemSlot, BloodGemSlot, BloodGemSlot];
    firearm: [BloodGemSlot];
}

export interface BloodborneProgress extends GameSpecificProgress {
    game: 'Bloodborne';
    equipment: BloodborneEquipment;
    bloodGems: WeaponGems;
    chalices: ChaliceName[];
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        weaponUpgradeLvl: number;
        insight: number;
    };
    charStats: {
        vitality: number;
        endurance: number;
        strength: number;
        skill: number;
        bloodtinge: number;
        arcane: number;
    };
}

export interface EldenRingProgress extends GameSpecificProgress {
    game: 'Elden Ring';
    equipment: EldenRingEquipment;
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        weaponUpgradeLvl: number;
        flaskAmount: number;
        flaskUpgrade: number;
        spiritAshUpgradeLvl: number;
    };
    charStats: {
        vigor: number;
        mind: number;
        endurance: number;
        strength: number;
        dexterity: number;
        intelligence: number;
        faith: number;
        arcane: number;
    };
}

export interface DemonsSoulsProgress extends GameSpecificProgress {
    game: "Demon's Souls";
    equipment: DemonsSoulsEquipment;
    tendencies: Array<{ id: string; value: number }>;
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        weaponUpgradeLvl: number;
        charTendency: number;
    };
    charStats: {
        vitality: number;
        intelligence: number;
        endurance: number;
        strength: number;
        dexterity: number;
        magic: number;
        faith: number;
        luck: number;
    };
}

const DarkSouls1KeyToStatName: Record<string, string> = {
    'soulLevel': 'Soul level',
    'newGamePlusCount': 'NG+ count',
    'weaponUpgradeLvl': 'Weapon lvl',
    'vitality': 'Vitality',
    'attunement': 'Attunement',
    'endurance': 'Endurance',
    'strength': 'Strength',
    'dexterity': 'Dexterity',
    'resistance': 'Resistance',
    'intelligence': 'Intelligence',
    'faith': 'Faith',
}

const DarkSouls2KeyToStatName: Record<string, string> = {
    'soulLevel': 'Soul level',
    'newGamePlusCount': 'NG+ count',
    'weaponUpgradeLvl': 'Weapon lvl',
    'vitality': 'Vitality',
    'attunement': 'Attunement',
    'endurance': 'Endurance',
    'strength': 'Strength',
    'dexterity': 'Dexterity',
    'adaptability': 'Adaptability',
    'intelligence': 'Intelligence',
    'faith': 'Faith',
    'vigor': 'Vigor',
    'estusAmount': 'Estus shards',
    'estusUpgrade': 'Estus lvl'
};

const DarkSouls3KeyToStatName: Record<string, string> = {
    'soulLevel': 'Soul level',
    'newGamePlusCount': 'NG+ count',
    'weaponUpgradeLvl': 'Weapon lvl',
    'vitality': 'Vitality',
    'attunement': 'Attunement',
    'endurance': 'Endurance',
    'strength': 'Strength',
    'dexterity': 'Dexterity',
    'luck': 'Luck',
    'intelligence': 'Intelligence',
    'faith': 'Faith',
    'vigor': 'Vigor',
    'estusAmount': 'Estus shards',
    'estusUpgrade': 'Estus lvl'
};

const BloodborneKeyToStatName: Record<string, string> = {
    'soulLevel': 'Level',
    'newGamePlusCount': 'NG+ count',
    'weaponUpgradeLvl': 'Weapon lvl',
    'vitality': 'Vitality',
    'endurance': 'Endurance',
    'strength': 'Strength',
    'insight': 'Insight',
    'skill': 'Skill',
    'bloodtinge': 'Bloodtinge',
    'arcane': 'Arcane'
};

const EldenRingKeyToStatName: Record<string, string> = {
    'soulLevel': 'Soul level',
    'newGamePlusCount': 'NG+ count',
    'weaponUpgradeLvl': 'Weapon lvl',
    'vigor': 'Vigor',
    'mind': 'Mind',
    'endurance': 'Endurance',
    'strength': 'Strength',
    'dexterity': 'Dexterity',
    'intelligence': 'Intelligence',
    'faith': 'Faith',
    'arcane': 'Arcane',
    'flaskAmount': 'Flask shards',
    'flaskUpgrade': 'Flask lvl',
    'spiritAshUpgradeLvl': 'Spirit Ash lvl'
};

const DemonsSoulsKeyToStatName: Record<string, string> = {
    'soulLevel': 'Soul level',
    'newGamePlusCount': 'NG+ count',
    'weaponUpgradeLvl': 'Weapon lvl',
    'vitality': 'Vitality',
    'intelligence': 'Intelligence',
    'endurance': 'Endurance',
    'strength': 'Strength',
    'dexterity': 'Dexterity',
    'magic': 'Magic',
    'faith': 'Faith',
    'luck': 'Luck',
    'charTendency': 'Char Tendency',
};

export const KeyToStatName: Record<string, Record<string, string>> = {
    'ds1': DarkSouls1KeyToStatName,
    'ds2': DarkSouls2KeyToStatName,
    'ds3': DarkSouls3KeyToStatName,
    'bb': BloodborneKeyToStatName,
    'elden': EldenRingKeyToStatName,
    'des': DemonsSoulsKeyToStatName
};

export type AllGameProgress =
    | DarkSouls1Progress
    | DarkSouls2Progress
    | DarkSouls3Progress
    | BloodborneProgress
    | EldenRingProgress
    | DemonsSoulsProgress;