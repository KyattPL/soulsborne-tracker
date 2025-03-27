import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

import { DEFAULT_PROGRESSES } from "@/data/defaultProgresses";

interface StatsInfoProps {
    gameId: string;
    copiedText: string;
    copyToClipboard: (text: string, type: string) => void;
}

export default function StatsInfo({ gameId, copiedText, copyToClipboard }: StatsInfoProps) {
    const gameProgress = DEFAULT_PROGRESSES[gameId];
    if (!gameProgress) return <p>No stats available</p>;

    const { playerStats, charStats } = gameProgress;

    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-amber-300">Player Stats</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                        onClick={() => copyToClipboard(JSON.stringify(playerStats), 'playerStats')}
                    >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'playerStats' ? 'Copied!' : 'Copy keys'}
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {Object.keys(playerStats).filter(key => key !== 'game').map((statKey) => (
                        <div key={statKey} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                            <div className="text-zinc-200 capitalize">
                                {statKey.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{statKey}</code>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 w-7 p-0"
                                    onClick={() => copyToClipboard(statKey, `stat-${statKey}`)}
                                >
                                    <Copy className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-amber-300">Character Stats</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                        onClick={() => copyToClipboard(JSON.stringify(charStats), 'charStats')}
                    >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'charStats' ? 'Copied!' : 'Copy keys'}
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {Object.keys(charStats).map((statKey) => (
                        <div key={statKey} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                            <div className="text-zinc-200 capitalize">
                                {statKey.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{statKey}</code>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 w-7 p-0"
                                    onClick={() => copyToClipboard(statKey, `char-${statKey}`)}
                                >
                                    <Copy className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};