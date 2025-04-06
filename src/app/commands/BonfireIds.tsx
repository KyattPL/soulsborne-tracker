import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

import { bonfires } from '@/data/bonfires';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BonfireIdsProps {
    gameId: string;
    copiedText: string;
    copyToClipboard: (text: string, type: string) => void;
}

export default function BonfireIds({ gameId, copiedText, copyToClipboard }: BonfireIdsProps) {
    const [location, setLocation] = useState('');

    const gameBonfires = bonfires[gameId].sort((a, b) => a.name.localeCompare(b.name)) || [];

    const availableCategories = [
        ...new Set(gameBonfires.map(bonfire => bonfire.location))
    ];

    // Filter equipment based on search term
    const filteredLocations = (gameId === 'ds1' || gameId === 'ds2') ? gameBonfires : (location !== '') ? gameBonfires.filter(bonfire =>
        (location === '' || bonfire.location === location)
    ) : [];

    return (
        <div className="space-y-4">
            <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium text-amber-300">Total bonfires: {filteredLocations.length}</h3>
                {gameId !== 'ds1' && gameId !== 'ds2' ?
                    <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger className="w-full md:w-[180px] bg-amber-900/50 border-amber-500/50 text-amber-200">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent className='text-amber-100 bg-amber-900 border-amber-500/50'>
                            {availableCategories.map(cat => (
                                <SelectItem key={cat} value={cat}>{cat[0].toUpperCase() + cat.slice(1)}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select> : <></>}
                <Button
                    variant="outline"
                    size="sm"
                    className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                    onClick={() => copyToClipboard(JSON.stringify(gameBonfires), 'bonfires')}
                >
                    <Copy className="w-3 h-3 mr-1" />
                    {copiedText === 'bonfires' ? 'Copied!' : 'Copy all'}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {filteredLocations.map((bonfire) => (
                    <div key={bonfire.id} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                        <div>
                            <p className="font-medium text-zinc-200">{bonfire.name}</p>
                            <p className="text-xs text-zinc-400">{bonfire.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{bonfire.id}</code>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => copyToClipboard(bonfire.id.toString(), `bonfire-${bonfire.id}`)}
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