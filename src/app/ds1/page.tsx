import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BossList from '@/components/BossList';
import Map from '@/components/Map';
import ProgressStats from '@/components/ProgressStats';

export default function DS1Page() {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">
                Dark Souls - Progress Tracker
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                            <CardTitle className="text-zinc-100">Boss Progression</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Suspense fallback={<div>Loading Bosses...</div>}>
                                <BossList />
                            </Suspense>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                            <CardTitle className="text-zinc-100">Progression Statistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Suspense fallback={<div>Loading Stats...</div>}>
                                <ProgressStats />
                            </Suspense>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader>
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
    );
}