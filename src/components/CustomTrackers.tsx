'use client';

import { useState, useEffect } from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Tracker {
    id: string;
    name: string;
    total: number;
    current: number;
    color: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';
}

const TRACKER_COLORS = ['emerald', 'blue', 'purple', 'amber', 'rose'] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused = "bg-emerald-500 bg-blue-500 bg-purple-500 bg-amber-500 bg-rose-500";

export default function CustomTrackers() {
    const [trackers, setTrackers] = useState<Tracker[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const [newTracker, setNewTracker] = useState<{
        name: string;
        total: number;
        color: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';
    }>({
        name: '',
        total: 0,
        color: 'emerald'
    });

    useEffect(() => {
        const savedTrackers = JSON.parse(localStorage.getItem('customTrackers') || '[]');
        setTrackers(savedTrackers);
    }, []);

    const saveTrackers = (updatedTrackers: Tracker[]) => {
        setTrackers(updatedTrackers);
        localStorage.setItem('customTrackers', JSON.stringify(updatedTrackers));
    };

    const handleAddTracker = () => {
        if (!newTracker.name || newTracker.total <= 0) return;

        const tracker: Tracker = {
            id: Date.now().toString(),
            name: newTracker.name,
            total: newTracker.total,
            current: 0,
            color: newTracker.color,
        };

        saveTrackers([...trackers, tracker]);
        setNewTracker({
            name: '',
            total: 0,
            color: 'emerald'
        });
        setIsOpen(false);
    };

    const updateProgress = (trackerId: string, increment: boolean) => {
        const updatedTrackers = trackers.map(tracker => {
            if (tracker.id === trackerId) {
                const newCurrent = increment
                    ? Math.min(tracker.current + 1, tracker.total)
                    : Math.max(tracker.current - 1, 0);
                return { ...tracker, current: newCurrent };
            }
            return tracker;
        });
        saveTrackers(updatedTrackers);
    };

    const removeTracker = (trackerId: string) => {
        const updatedTrackers = trackers.filter(t => t.id !== trackerId);
        saveTrackers(updatedTrackers);
    };

    return (
        <div className="space-y-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full bg-zinc-800/50 border-dashed border-zinc-700/50 text-zinc-400">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Custom Tracker
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-zinc-800">
                    <DialogHeader>
                        <DialogTitle>Add New Tracker</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Tracker Name</Label>
                            <Input
                                id="name"
                                value={newTracker.name}
                                onChange={(e) => setNewTracker(prev => ({
                                    ...prev,
                                    name: e.target.value
                                }))}
                                placeholder="e.g., Spells Collected"
                                className="bg-zinc-800 border-zinc-700"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="total">Total Items</Label>
                            <Input
                                id="total"
                                type="number"
                                value={newTracker.total || ''}
                                onChange={(e) => setNewTracker(prev => ({
                                    ...prev,
                                    total: parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0
                                }))}
                                className="bg-zinc-800 border-zinc-700"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Color</Label>
                            <div className="flex gap-2">
                                {TRACKER_COLORS.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setNewTracker(prev => ({
                                            ...prev,
                                            color
                                        }))}
                                        className={`w-8 h-8 rounded-full border-2 bg-${color}-500 ${newTracker.color === color ?
                                            'border-white' : 'border-transparent'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <Button onClick={handleAddTracker} className="w-full">
                            Add Tracker
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <div className="space-y-4">
                {trackers.map(tracker => {
                    const progressPercentage = (tracker.current / tracker.total) * 100;

                    return (
                        <div
                            key={tracker.id}
                            className="border border-zinc-700/50 rounded-lg p-4 bg-zinc-800/30"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-semibold text-zinc-200">{tracker.name}</h3>
                                    <p className="text-sm text-zinc-400">
                                        {tracker.current} / {tracker.total}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => updateProgress(tracker.id, false)}
                                        className="h-8 w-8 text-zinc-400"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => updateProgress(tracker.id, true)}
                                        className="h-8 w-8 text-zinc-400"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeTracker(tracker.id)}
                                        className="h-8 w-8 text-red-400 hover:text-red-300"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full bg-zinc-700/30 rounded-full h-2">
                                <div
                                    className={`bg-${tracker.color}-500 h-2 rounded-full transition-all duration-300`}
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}