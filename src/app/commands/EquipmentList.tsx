import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import { EQ_ITEMS } from '@/data/equipmentItems';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';
import { KeyToEquipmentSections } from '@/types/equipment.types';

interface EquipmentListProps {
    gameId: string;
    copiedText: string;
    copyToClipboard: (text: string, type: string) => void;
}

export default function EquipmentList({ gameId, copiedText, copyToClipboard }: EquipmentListProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const gameEquipment = EQ_ITEMS[gameId] || [];

    const eqSections = KeyToEquipmentSections[gameId];
    const eqSlots = eqSections.flatMap(sec => sec.slots).map(o => o.key);

    const availableCategories = [
        ...new Set(gameEquipment.map(item => item.category))
    ];

    // Filter equipment based on search term
    const filteredEquipment = (searchTerm.length >= 3 && category !== '') ? gameEquipment.filter(item =>
        (searchTerm.length < 3 ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (category === '' || item.category === category)
    ) : [];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-amber-300">Equipment slots</h3>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                    onClick={() => copyToClipboard(JSON.stringify(eqSlots), 'eqSlots')}
                >
                    <Copy className="w-3 h-3 mr-1" />
                    {copiedText === 'eqSlots' ? 'Copied!' : 'Copy keys'}
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {eqSlots.map((slotKey) => (
                    <div key={slotKey} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                        <div className="text-zinc-200 capitalize">
                            {slotKey.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="flex items-center gap-2">
                            <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{slotKey}</code>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => copyToClipboard(slotKey, `slot-${slotKey}`)}
                            >
                                <Copy className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-grow">
                    <Input
                        type="text"
                        placeholder="Search equipment by name or ID (min 3 chars)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 bg-zinc-800/50 border-zinc-700/50 text-zinc-200"
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                </div>
                <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full md:w-[180px] bg-amber-900/50 border-amber-500/50 text-amber-200">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className='text-amber-100 bg-amber-900 border-amber-500/50'>
                        {availableCategories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat[0].toUpperCase() + cat.slice(1)}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                    onClick={() => copyToClipboard(
                        JSON.stringify(filteredEquipment),
                        'equipment'
                    )}
                    disabled={filteredEquipment.length === 0}
                >
                    <Copy className="w-3 h-3 mr-1" />
                    {copiedText === 'equipment' ? 'Copied!' : 'Copy results'}
                </Button>
            </div>

            {(searchTerm.length > 0 && searchTerm.length < 3 && category === '') && (
                <p className="text-zinc-400 text-center">
                    Please enter at least 3 characters AND select a category
                </p>
            )}

            {filteredEquipment.length === 0 && searchTerm.length >= 3 && category !== '' ?
                (
                    <p className="text-zinc-400 text-center">No equipment found</p>
                ) : filteredEquipment.length === 0 && category === '' ?
                    (
                        <p className="text-zinc-400 text-center">Select a category</p>
                    ) : filteredEquipment.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {filteredEquipment.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center"
                                >
                                    <div>
                                        <p className="font-medium text-zinc-200">{item.name}</p>
                                        <p className="text-xs text-zinc-400">{item.category[0].toUpperCase() + item.category.slice(1)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">
                                            {item.id}
                                        </code>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-7 w-7 p-0"
                                            onClick={() => copyToClipboard(item.id, `equip-${item.id}`)}
                                        >
                                            <Copy className="h-3 w-3" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
        </div>
    );
}