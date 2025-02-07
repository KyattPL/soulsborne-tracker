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

export type AllGameProgress =
    | DarkSouls1Progress;