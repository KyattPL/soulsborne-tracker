import { Button } from "@/components/ui/button";
import { CHALICE_NAMES } from "@/data/chalices";
import { Copy } from "lucide-react";

interface ChaliceIdsProps {
    copiedText: string;
    copyToClipboard: (text: string, type: string) => void;
}

export default function ChaliceIds({ copiedText, copyToClipboard }: ChaliceIdsProps) {

    const formattedIds = CHALICE_NAMES.map(name => name.toLowerCase().replace(' ', '-'));

    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-amber-300">Chalice IDs</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                        onClick={() => copyToClipboard(JSON.stringify(formattedIds), 'chaliceIds')}
                    >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'chaliceIds' ? 'Copied!' : 'Copy keys'}
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {formattedIds.map((chalice, index) => (
                        <div key={chalice} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                            <div className="text-zinc-200 capitalize">
                                {CHALICE_NAMES[index].replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{chalice}</code>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 w-7 p-0"
                                    onClick={() => copyToClipboard(chalice, `chalice-${chalice}`)}
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