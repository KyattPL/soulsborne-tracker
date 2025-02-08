import { DarkSouls1Progress, AllGameProgress } from "@/types/database.types";

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

export const DEFAULT_PROGRESSES: Record<string, AllGameProgress> = {
    'ds1': DS1_DEFAULT_PROGRESS
}