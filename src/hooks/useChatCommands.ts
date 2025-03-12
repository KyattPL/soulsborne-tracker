import { useProgress } from "@/components/ProgressProvider";

import { updateCharStatGuarded, updatePlayerStatGuarded } from "@/utils/progressGuards";
import { bosses } from "@/data/bosses";

export function useChatCommands() {
    const { progress, updateProgress } = useProgress();

    function modifyCharStat(stat: string, amount: number) {
        updateCharStatGuarded(stat, progress, amount, updateProgress);
    }

    function modifyPlayerStat(stat: string, amount: number) {
        updatePlayerStatGuarded(stat, progress, amount, updateProgress);
    }

    function modifyBossAttempt(bossId: string, amount: number) {
        const newArr = progress.bossesAttempts;
        const index = newArr.findIndex(b => b.id === bossId);

        if (index !== -1) {
            newArr[index].attempts = newArr[index].attempts + amount;
            if (newArr[index].attempts < 0) newArr[index].attempts = 0;
        } else {
            const bossesArr = Object.values(bosses).find(bosses => bosses.find(b => b.id === bossId));
            const bossName = bossesArr?.find(b => b.id === bossId);
            newArr.push({ id: bossId, attempts: amount < 0 ? 0 : amount, name: bossName!.name, defeated: false });
        }

        updateProgress({ ...progress, bossesAttempts: newArr });
    }

    function toggleBossDone(bossId: string) {
        const newArr = progress.bossesAttempts;
        const index = newArr.findIndex(b => b.id === bossId);


        if (index !== -1) {
            newArr[index].defeated = !newArr[index].defeated;
        } else {
            const bossesArr = Object.values(bosses).find(bosses => bosses.find(b => b.id === bossId));
            const bossName = bossesArr?.find(b => b.id === bossId);
            newArr.push({ id: bossId, attempts: 0, name: bossName!.name, defeated: true });
        }

        updateProgress({ ...progress, bossesAttempts: newArr });
    }

    function modifyCustomTracker(id: string, amount: number) {
        const updatedTrackers = progress.customTrackers.map(tracker => {
            if (tracker.id === id) {
                let newCurrent = tracker.current + amount;
                if (newCurrent < 0) newCurrent = 0;
                if (newCurrent > tracker.total) newCurrent = tracker.total;
                return { ...tracker, current: newCurrent };
            }
            return tracker;
        });

        updateProgress({ ...progress, customTrackers: [...updatedTrackers] });
    }

    return {
        modifyCharStat,
        modifyPlayerStat,
        modifyBossAttempt,
        toggleBossDone,
        modifyCustomTracker,
    };
}
