import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

import { bosses } from '@/data/bosses';

interface BossListProps {
    gameId: string;
    copiedText: string;
    copyToClipboard: (text: string, type: string) => void;
}

export default function BossList({ gameId, copiedText, copyToClipboard }: BossListProps) {
    const gameBosses = bosses[gameId] || [];
    return (
        <div className="space-y-4">
            <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium text-amber-300">Total bosses: {gameBosses.length}</h3>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                    onClick={() => copyToClipboard(JSON.stringify(gameBosses), 'bosses')}
                >
                    <Copy className="w-3 h-3 mr-1" />
                    {copiedText === 'bosses' ? 'Copied!' : 'Copy all'}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {gameBosses.map((boss) => (
                    <div key={boss.id} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                        <div>
                            <p className="font-medium text-zinc-200">{boss.name}</p>
                            <p className="text-xs text-zinc-400">{boss.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{boss.id}</code>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => copyToClipboard(boss.id, `boss-${boss.id}`)}
                            >
                                <Copy className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};