import { AllGameProgress, DarkSouls1Progress, DarkSouls2Progress } from "@/types/progress.types";

export const isDarkSouls1Progress = (progress: AllGameProgress): progress is DarkSouls1Progress => {
    return progress.game === 'Dark Souls 1';
};

export const isDarkSouls2Progress = (progress: AllGameProgress): progress is DarkSouls2Progress => {
    return progress.game === 'Dark Souls 2';
};