export type GameTitle =
    | 'Dark Souls 1'
    | 'Dark Souls 2'
    | 'Dark Souls 3'
    | 'Elden Ring'
    | 'Bloodborne'
    | 'Sekiro';

export interface GameSpecificProgress {
    // Base interface that can be extended for each game
    id?: string;
    game: GameTitle;
    charStats: object;
}

// Dark Souls 1 Specific Progress
export interface DarkSouls1Progress extends GameSpecificProgress {
    game: 'Dark Souls 1';
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        maxWeaponUpgrade: number;
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
    defeatedBosses: Array<{
        id: string;
        name: string;
        attempts: number;
    }>;
    customTrackers: Array<{
        id: string;
        name: string;
        total: number;
        current: number;
        color: string;
    }>;
}

export interface DarkSouls2Progress extends GameSpecificProgress {
    game: 'Dark Souls 2';
    playerStats: {
        soulLevel: number;
        newGamePlusCount: number;
        maxWeaponUpgrade: number;
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
    defeatedBosses: Array<{
        id: string;
        name: string;
        attempts: number;
    }>;
    customTrackers: Array<{
        id: string;
        name: string;
        total: number;
        current: number;
        color: string;
    }>;
}

const DarkSouls1KeyToStatName: Record<string, string> = {
    'soulLevel': 'Soul level',
    'newGamePlusCount': 'NG+ count',
    'maxWeaponUpgrade': 'Weapon lvl',
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
    'maxWeaponUpgrade': 'Weapon lvl',
    'vitality': 'Vitality',
    'attunement': 'Attunement',
    'endurance': 'Endurance',
    'strength': 'Strength',
    'dexterity': 'Dexterity',
    'adaptability': 'Adaptability',
    'intelligence': 'Intelligence',
    'faith': 'Faith',
    'vigor': 'Vigor'
};

export const KeyToStatName: Record<string, Record<string, string>> = {
    'ds1': DarkSouls1KeyToStatName,
    'ds2': DarkSouls2KeyToStatName
};

export type AllGameProgress =
    | DarkSouls1Progress
    | DarkSouls2Progress;