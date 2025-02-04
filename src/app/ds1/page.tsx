import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BossList from '@/components/BossList';
import CharacterStats from '@/components/CharacterStats';
import Map from '@/components/Map';
import CustomTrackers from '@/components/CustomTrackers';

export default function DS1Page() {
    return (
        <div className="h-[100dvh] flex flex-col">
            <div className="max-w-7xl w-full mx-auto flex-1 p-6 overflow-auto">
                <h1 className="text-3xl font-bold mb-6 text-zinc-100">
                    Dark Souls - Progress Tracker
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <Suspense fallback={<div>Loading Stats...</div>}>
                            <CharacterStats />
                        </Suspense>

                        <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-zinc-100">Boss Progression</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Suspense fallback={<div>Loading Bosses...</div>}>
                                    <BossList />
                                </Suspense>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-zinc-100">Custom Trackers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Suspense fallback={<div>Loading Trackers...</div>}>
                                    <CustomTrackers />
                                </Suspense>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm h-fit">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-zinc-100">Lordran Map</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Suspense fallback={<div>Loading Map...</div>}>
                                <Map />
                            </Suspense>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}