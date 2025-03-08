import {
    DarkSouls1Progress, DarkSouls2Progress, AllGameProgress,
    DarkSouls3Progress, BloodborneProgress, EldenRingProgress,
    DemonsSoulsProgress
} from "@/types/progress.types";

const DS1_DEFAULT_PROGRESS: DarkSouls1Progress = {
    game: 'Dark Souls 1',
    playerStats: {
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
    },
    charStats: {
        vitality: 10,
        attunement: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        resistance: 10,
        intelligence: 10,
        faith: 10,
    },
    bossesAttempts: [],
    customTrackers: [],
};

const DS2_DEFAULT_PROGRESS: DarkSouls2Progress = {
    game: 'Dark Souls 2',
    playerStats: {
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
        estusAmount: 0,
        estusUpgrade: 0
    },
    charStats: {
        vigor: 10,
        vitality: 10,
        attunement: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        adaptability: 10,
        intelligence: 10,
        faith: 10,
    },
    bossesAttempts: [],
    customTrackers: [],
};

const DS3_DEFAULT_PROGRESS: DarkSouls3Progress = {
    game: 'Dark Souls 3',
    playerStats: {
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
        estusAmount: 3,
        estusUpgrade: 0
    },
    charStats: {
        vigor: 10,
        vitality: 10,
        attunement: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        luck: 10,
        intelligence: 10,
        faith: 10,
    },
    bossesAttempts: [],
    customTrackers: [],
};

const BB_DEFAULT_PROGRESS: BloodborneProgress = {
    game: 'Bloodborne',
    playerStats: {
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
        insight: 0
    },
    charStats: {
        vitality: 10,
        strength: 10,
        endurance: 10,
        skill: 10,
        bloodtinge: 10,
        arcane: 10
    },
    bossesAttempts: [],
    customTrackers: [],
};

const ELDEN_DEFAULT_PROGRESS: EldenRingProgress = {
    game: 'Elden Ring',
    playerStats: {
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
        flaskAmount: 3,
        flaskUpgrade: 0
    },
    charStats: {
        vigor: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        mind: 10,
        intelligence: 10,
        faith: 10,
        arcane: 10
    },
    bossesAttempts: [],
    customTrackers: [],
};

const DES_DEFAULT_PROGRESS: DemonsSoulsProgress = {
    game: "Demon's Souls",
    playerStats: {
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
        charTendency: 3,
    },
    charStats: {
        vitality: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        magic: 10,
        intelligence: 10,
        faith: 10,
        luck: 10
    },
    bossesAttempts: [],
    customTrackers: [],
};

export const DEFAULT_PROGRESSES: Record<string, AllGameProgress> = {
    'ds1': DS1_DEFAULT_PROGRESS,
    'ds2': DS2_DEFAULT_PROGRESS,
    'ds3': DS3_DEFAULT_PROGRESS,
    'bb': BB_DEFAULT_PROGRESS,
    'elden': ELDEN_DEFAULT_PROGRESS,
    'des': DES_DEFAULT_PROGRESS
}