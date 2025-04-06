import ComfyJS from "comfy.js";
import { useProgress } from "@/components/ProgressProvider";

import { isBloodborneProgress, isDemonsSoulsProgress, updateCharStatGuarded, updatePlayerStatGuarded } from "@/utils/progressGuards";
import { bosses } from "@/data/bosses";
import { encode } from "js-base64";
import { TChaliceName } from "@/data/chalices";
import { bonfires } from "@/data/bonfires";


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
        const index = Number(id);

        const updatedTrackers = progress.customTrackers;
        updatedTrackers[index].current += amount;

        if (updatedTrackers[index].current < 0) updatedTrackers[index].current = 0;
        if (updatedTrackers[index].current > updatedTrackers[index].total) updatedTrackers[index].current = updatedTrackers[index].total;

        updateProgress({ ...progress, customTrackers: [...updatedTrackers] });
    }

    function sendShareableLink() {
        ComfyJS.Say(encode(JSON.stringify(progress), true), null);
    }

    function modifyEquipment(slotId: string, itemId: string) {
        const eqObj = progress.equipment;

        if (itemId === 'none') {
            eqObj[slotId] = undefined;
        } else {
            eqObj[slotId] = itemId;
        }

        updateProgress({ ...progress, equipment: eqObj });
    }

    function modifyTendency(tendencyId: string, value: number) {
        if (!isDemonsSoulsProgress(progress)) return;

        const tendencyArr = progress.tendencies;
        const tendIndex = tendencyArr.findIndex(t => t.id === tendencyId);

        if (tendIndex !== -1) {
            let a = tendencyArr[tendIndex].value + value;
            if (a > 3) a = 3;
            if (a < -3) a = -3;
            tendencyArr[tendIndex].value = a;
            updateProgress({ ...progress, tendencies: tendencyArr });
        }
    }

    function modifyBloodGem(slotId: string, slotType: string, gemId: string) {
        if (!isBloodborneProgress(progress)) return;
        if (!['weapon-1', 'weapon-2', 'weapon-3', 'firearm'].includes(slotId)) return;
        if (!['radial', 'circle', 'waning', 'triangle'].includes(slotType)) return;

        const bgs = progress.bloodGems;
        const guardedGemId = gemId === 'none' ? null : gemId;

        if (slotId === 'weapon-1') {
            bgs['weapon'][0].type = slotType as "radial" | "circle" | "waning" | "triangle" | null;
            bgs['weapon'][0].gemId = guardedGemId;
        } else if (slotId === 'weapon-2') {
            bgs['weapon'][1].type = slotType as "radial" | "circle" | "waning" | "triangle" | null;
            bgs['weapon'][1].gemId = guardedGemId;
        } else if (slotId === 'weapon-3') {
            bgs['weapon'][2].type = slotType as "radial" | "circle" | "waning" | "triangle" | null;
            bgs['weapon'][2].gemId = guardedGemId;
        } else if (slotId === 'firearm') {
            bgs['firearm'][0].type = slotType as "radial" | "circle" | "waning" | "triangle" | null;
            bgs['firearm'][0].gemId = guardedGemId;
        } else {
            return;
        }

        updateProgress({ ...progress, bloodGems: bgs });
    }

    function toggleChalice(chaliceId: string) {
        if (!isBloodborneProgress(progress)) return;

        const chaliceName = chaliceId.replace('-', ' ').split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

        if (progress.chalices.includes(chaliceName as TChaliceName)) {
            const chals = progress.chalices.filter(c => c !== chaliceName);
            updateProgress({ ...progress, chalices: chals });
        } else {
            updateProgress({ ...progress, chalices: [...progress.chalices, chaliceName as TChaliceName] });
        }
    }

    function toggleBonfire(bonfireId: number) {
        const bonfireIndex = progress.bonfires.findIndex(b => b.id === bonfireId);

        if (bonfireIndex === -1) {
            const bonfireArr = Object.values(bonfires).find(bonfire => bonfire.find(b => b.id === bonfireId));
            const foundBonfire = bonfireArr?.find(b => b.id === bonfireId);
            const newBonfire = { id: foundBonfire!.id, name: foundBonfire!.name, unlocked: true, location: foundBonfire!.location };

            updateProgress({ ...progress, bonfires: [...progress.bonfires, newBonfire] });
        } else {
            const newArr = progress.bonfires;
            newArr[bonfireIndex].unlocked = !newArr[bonfireId].unlocked;

            updateProgress({ ...progress, bonfires: newArr });
        }
    }

    return {
        modifyCharStat,
        modifyPlayerStat,
        modifyBossAttempt,
        toggleBossDone,
        modifyCustomTracker,
        sendShareableLink,
        modifyEquipment,
        modifyTendency,
        modifyBloodGem,
        toggleChalice,
        toggleBonfire
    };
}
