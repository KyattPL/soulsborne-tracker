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
}): ChatCommand[] {
    return [
        {
            name: "charstat",
            description: "Modify a character stat. Usage: !charstat vitality +2",
            execute: (user, args) => {
                const [stat, amount] = args;
                if (!stat || isNaN(Number(amount))) return;

                handlers.modifyCharStat(stat, Number(amount));
            },
        },
        {
            name: "playerstat",
            description: "Modify a player stat. Usage: !playerstat soulLevel +2",
            execute: (user, args) => {
                const [stat, amount] = args;
                if (!stat || isNaN(Number(amount))) return;

                handlers.modifyPlayerStat(stat, Number(amount));
            },
        },
        {
            name: "boss",
            description: "Modify boss attempts. Usage: !boss Artorias +1",
            execute: (user, args) => {
                const [bossId, amount] = args;
                if (!bossId || isNaN(Number(amount))) return;
                handlers.modifyBossAttempt(bossId, Number(amount));
            },
        },
        {
            name: "bossdone",
            description: "Toggle boss completion. Usage: !bossdone Artorias",
            execute: (user, args) => {
                const [bossId] = args;
                if (!bossId) return;
                handlers.toggleBossDone(bossId);
            },
        },
        {
            name: "track",
            description: "Modify custom tracker. Usage: !track 1 +1",
            execute: (user, args) => {
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
        }
    ];
}
