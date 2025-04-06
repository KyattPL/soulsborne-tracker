import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface TendencyIdsProps {
    copiedText: string;
    copyToClipboard: (text: string, type: string) => void;
}

const TENDENCY_IDS = [
    { id: 'boletaria', name: 'Boletarian Palace', archstone: 'Archstone of the Covetous King' },
    { id: 'stonefang', name: 'Stonefang Tunnel', archstone: 'Archstone of the Digger King' },
    { id: 'latria', name: 'Tower of Latria', archstone: 'Archstone of the Tower Queen' },
    { id: 'storms', name: 'Shrine of Storms', archstone: 'Archstone of the Shadowmen' },
    { id: 'defilement', name: 'Valley of Defilement', archstone: 'Archstone of the Chieftain' },
    { id: 'character', name: 'Player tendency' }
];

export default function TendencyIds({ copiedText, copyToClipboard }: TendencyIdsProps) {

    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-amber-300">Tendency IDs</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                        onClick={() => copyToClipboard(JSON.stringify(TENDENCY_IDS.map(t => t.id)), 'tendencyIds')}
                    >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'tendencyIds' ? 'Copied!' : 'Copy keys'}
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {TENDENCY_IDS.map((tend) => (
                        <div key={tend.id} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                            <div className="text-zinc-200 capitalize">
                                {tend.name.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{tend.id}</code>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 w-7 p-0"
                                    onClick={() => copyToClipboard(tend.id, `tend-${tend.id}`)}
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