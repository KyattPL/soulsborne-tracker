import { DarkSouls1Progress, DarkSouls2Progress, AllGameProgress } from "@/types/progress.types";

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
    defeatedBosses: [],
    customTrackers: [],
};

const DS2_DEFAULT_PROGRESS: DarkSouls2Progress = {
    game: 'Dark Souls 2',
    playerStats: {
        soulLevel: 1,
        newGamePlusCount: 0,
        maxWeaponUpgrade: 0,
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
    defeatedBosses: [],
    customTrackers: [],
};

export const DEFAULT_PROGRESSES: Record<string, AllGameProgress> = {
    'ds1': DS1_DEFAULT_PROGRESS,
    'ds2': DS2_DEFAULT_PROGRESS
}