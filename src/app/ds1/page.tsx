import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import BossList from '@/components/BossList';
import CharacterStats from '@/components/CharacterStats';
import Map from '@/components/Map';
import CustomTrackers from '@/components/CustomTrackers';
import ScrollableCard from '@/components/ScrollableCard';

export default function DS1Page() {
    return (
        <div className="flex flex-col h-full">
            <div className="max-w-screen-2xl w-full mx-auto flex-1 p-6 h-full">
                <h1 className="text-3xl font-bold mb-6 text-zinc-100">
                    Dark Souls - Progress Tracker
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100%-2rem)]">

                    {/* Left Column - Fixed Height, No Scroll */}
                    <div>
                        <Suspense fallback={<div>Loading Stats...</div>}>
                            <CharacterStats />
                        </Suspense>
                    </div>

                    {/* Middle Column - Scrollable */}
                    <div className="space-y-6 lg:flex lg:flex-col px-2 h-full overflow-auto">
                        <ScrollableCard title="Boss Progression">
                            <Suspense fallback={<div>Loading Bosses...</div>}>
                                <BossList />
                            </Suspense>
                        </ScrollableCard>

                        <ScrollableCard title="Custom Trackers">
                            <Suspense fallback={<div>Loading Trackers...</div>}>
                                <CustomTrackers />
                            </Suspense>
                        </ScrollableCard>
                    </div>

                    {/* Right Column - Fixed Height, No Scroll */}
                    <div className="h-full">
                        <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
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
        </div>
    );
}
