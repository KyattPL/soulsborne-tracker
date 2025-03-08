import {
    AllGameProgress, BloodborneProgress, DarkSouls1Progress, DarkSouls2Progress, DarkSouls3Progress,
    EldenRingProgress, DemonsSoulsProgress
} from "@/types/progress.types";

export const isDarkSouls1Progress = (progress: AllGameProgress): progress is DarkSouls1Progress => {
    return progress.game === 'Dark Souls 1';
};

export const isDarkSouls2Progress = (progress: AllGameProgress): progress is DarkSouls2Progress => {
    return progress.game === 'Dark Souls 2';
};

export const isDarkSouls3Progress = (progress: AllGameProgress): progress is DarkSouls3Progress => {
    return progress.game === 'Dark Souls 3';
};

export const isBloodborneProgress = (progress: AllGameProgress): progress is BloodborneProgress => {
    return progress.game === 'Bloodborne';
};

export const isEldenRingProgress = (progress: AllGameProgress): progress is EldenRingProgress => {
    return progress.game === 'Elden Ring';
};

export const isDemonsSoulsProgress = (progress: AllGameProgress): progress is DemonsSoulsProgress => {
    return progress.game === "Demon's Souls";
};


export const updateCharStatGuarded = (stat: string, progress: AllGameProgress, change: number, updateProgress: (data: AllGameProgress) => void) => {
    let newStats;

    if (isDarkSouls1Progress(progress) && stat in progress.charStats) {
        newStats = {
            ...progress.charStats,
            [stat]: Math.max(0, progress.charStats[stat as keyof DarkSouls1Progress['charStats']] + change),
        };
        updateProgress({ ...progress, charStats: newStats });
    } else if (isDarkSouls2Progress(progress) && stat in progress.charStats) {
        newStats = {
            ...progress.charStats,
            [stat]: Math.max(0, progress.charStats[stat as keyof DarkSouls2Progress['charStats']] + change),
        };

        updateProgress({ ...progress, charStats: newStats });
    } else if (isDarkSouls3Progress(progress) && stat in progress.charStats) {
        newStats = {
            ...progress.charStats,
            [stat]: Math.max(0, progress.charStats[stat as keyof DarkSouls3Progress['charStats']] + change),
        };

        updateProgress({ ...progress, charStats: newStats });
    } else if (isBloodborneProgress(progress) && stat in progress.charStats) {
        newStats = {
            ...progress.charStats,
            [stat]: Math.max(0, progress.charStats[stat as keyof BloodborneProgress['charStats']] + change),
        };

        updateProgress({ ...progress, charStats: newStats });
    } else if (isEldenRingProgress(progress) && stat in progress.charStats) {
        newStats = {
            ...progress.charStats,
            [stat]: Math.max(0, progress.charStats[stat as keyof EldenRingProgress['charStats']] + change),
        };

        updateProgress({ ...progress, charStats: newStats });
    } else if (isDemonsSoulsProgress(progress) && stat in progress.charStats) {
        newStats = {
            ...progress.charStats,
            [stat]: Math.max(0, progress.charStats[stat as keyof DemonsSoulsProgress['charStats']] + change),
        };

        updateProgress({ ...progress, charStats: newStats });
    } else {
        console.error(`Invalid stat update attempt: ${stat}`);
        return;
    }
}

export const updatePlayerStatGuarded = (stat: string, progress: AllGameProgress, change: number, updateProgress: (data: AllGameProgress) => void) => {
    let newStats;

    if (isDarkSouls1Progress(progress) && stat in progress.playerStats) {
        newStats = {
            ...progress.playerStats,
            [stat]: Math.max(0, progress.playerStats[stat as keyof DarkSouls1Progress['playerStats']] + change),
        };
        updateProgress({ ...progress, playerStats: newStats });
    } else if (isDarkSouls2Progress(progress) && stat in progress.playerStats) {
        newStats = {
            ...progress.playerStats,
            [stat]: Math.max(0, progress.playerStats[stat as keyof DarkSouls2Progress['playerStats']] + change),
        };

        updateProgress({ ...progress, playerStats: newStats });
    } else if (isDarkSouls3Progress(progress) && stat in progress.playerStats) {
        newStats = {
            ...progress.playerStats,
            [stat]: Math.max(0, progress.playerStats[stat as keyof DarkSouls3Progress['playerStats']] + change),
        };

        updateProgress({ ...progress, playerStats: newStats });
    } else if (isBloodborneProgress(progress) && stat in progress.playerStats) {
        newStats = {
            ...progress.playerStats,
            [stat]: Math.max(0, progress.playerStats[stat as keyof BloodborneProgress['playerStats']] + change),
        };

        updateProgress({ ...progress, playerStats: newStats });
    } else if (isEldenRingProgress(progress) && stat in progress.playerStats) {
        newStats = {
            ...progress.playerStats,
            [stat]: Math.max(0, progress.playerStats[stat as keyof EldenRingProgress['playerStats']] + change),
        };

        updateProgress({ ...progress, playerStats: newStats });
    } else if (isDemonsSoulsProgress(progress) && stat in progress.playerStats) {
        newStats = {
            ...progress.playerStats,
            [stat]: Math.max(0, progress.playerStats[stat as keyof DemonsSoulsProgress['playerStats']] + change),
        };

        updateProgress({ ...progress, playerStats: newStats });
    } else {
        console.error(`Invalid stat update attempt: ${stat}`);
        return;
    }
}