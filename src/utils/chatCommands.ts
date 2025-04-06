type CommandArgs = string[];

interface ChatCommand {
    name: string;
    description: string;
    execute: (user: string, args: CommandArgs) => void;
}

export function getChatCommands(handlers: {
    modifyCharStat: (stat: string, amount: number) => void;
    modifyPlayerStat: (stat: string, amount: number) => void;
    modifyBossAttempt: (bossId: string, amount: number) => void;
    toggleBossDone: (bossId: string) => void;
    modifyCustomTracker: (id: string, amount: number) => void;
    sendShareableLink: () => void;
    modifyEquipment: (slotId: string, itemId: string) => void;
    modifyTendency: (tendencyId: string, value: number) => void;
    modifyBloodGem: (slotId: string, slotType: string, gemId: string) => void;
    toggleChalice: (chaliceId: string) => void;
    toggleBonfire: (bonfireId: number) => void;
}): ChatCommand[] {
    return [
        {
            name: "charstat",
            description: "Modify a character stat. Usage: !charstat vitality +2",
            execute: (_user, args) => {
                const [stat, amount] = args;
                if (!stat || isNaN(Number(amount))) return;

                handlers.modifyCharStat(stat, Number(amount));
            },
        },
        {
            name: "playerstat",
            description: "Modify a player stat. Usage: !playerstat soulLevel +2",
            execute: (_user, args) => {
                const [stat, amount] = args;
                if (!stat || isNaN(Number(amount))) return;

                handlers.modifyPlayerStat(stat, Number(amount));
            },
        },
        {
            name: "boss",
            description: "Modify boss attempts. Usage: !boss Artorias +1",
            execute: (_user, args) => {
                const [bossId, amount] = args;
                if (!bossId || isNaN(Number(amount))) return;
                handlers.modifyBossAttempt(bossId, Number(amount));
            },
        },
        {
            name: "bossdone",
            description: "Toggle boss completion. Usage: !bossdone Artorias",
            execute: (_user, args) => {
                const [bossId] = args;
                if (!bossId) return;
                handlers.toggleBossDone(bossId);
            },
        },
        {
            name: "track",
            description: "Modify custom tracker. Usage: !track 1 +1",
            execute: (_user, args) => {
                const [trackerId, amount] = args;
                if (!trackerId || isNaN(Number(amount)) || isNaN(Number(trackerId))) return;
                handlers.modifyCustomTracker(trackerId, Number(amount));
            },
        },
        {
            name: "getprogress",
            description: "Get shareable link for streamer's progress. Usage: !getprogress",
            execute: (_user, _args) => {
                handlers.sendShareableLink();
            }
        },
        {
            name: "eq",
            description: "Modify equipment. Usage: !eq <slot-id> <item-id>. Set <item-id> to 'none' to leave slot empty",
            execute: (_user, args) => {
                const [slotId, itemId] = args;
                if (!slotId || !itemId) return;
                handlers.modifyEquipment(slotId, itemId);
            }
        },
        {
            name: "tendency",
            description: "Modify world or player. Usage: !tendency boletaria +2",
            execute: (_user, args) => {
                const [tendencyId, value] = args;
                if (!tendencyId || isNaN(Number(value))) return;
                handlers.modifyTendency(tendencyId, Number(value));
            }
        },
        {
            name: "bloodgem",
            description: "Set blood gem. Usage: !bloodgem weapon-1 radial gold-blood-gem",
            execute: (_user, args) => {
                const [slotId, slotType, gemId] = args;
                if (!slotId || !slotType || !gemId) return;
                handlers.modifyBloodGem(slotId, slotType, gemId);
            }
        },
        {
            name: "chalice",
            description: "Toggle gathered chalice status. Usage: !chalice hintertomb.",
            execute: (_user, args) => {
                const [chaliceId] = args;
                if (!chaliceId) return;
                handlers.toggleChalice(chaliceId);
            }
        },
        {
            name: "bonfire",
            description: "Toggle bonfire / lamp / archstone / site of grace unlocked.",
            execute: (_user, args) => {
                const [bonfireId] = args;
                if (!bonfireId || isNaN(Number(bonfireId))) return;
                handlers.toggleBonfire(Number(bonfireId));
            }
        }
    ];
}
