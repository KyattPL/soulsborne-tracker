import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import BossList from '@/components/BossList';
import CharacterStats from '@/components/CharacterStats';
import Map from '@/components/Map';
import CustomTrackers from '@/components/CustomTrackers';
import ScrollableCard from '@/components/ScrollableCard';
import { ProgressProvider } from '@/components/ProgressProvider';
import ProgressShareLinkGenerator from '@/components/ProgressShareLinkGenerator';
import SaveProgressButton from '@/components/SaveProgressButton';
import ResetProgressButton from '@/components/ResetProgressButton';
import { TwitchChatMonitor } from '@/components/TwitchChatMonitor';
import TwitchConnectButton from '@/components/TwitchConnectButton';

export default function BBPage() {

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <div className="max-w-screen-2xl w-full mx-auto p-6">
                <ProgressProvider gameKey='bb'>
                    <div className="flex flex-col mb-4 lg:mb-0 lg:flex-row gap-6">
                        <h1 className="text-3xl font-bold mb-6 text-zinc-100">
                            Bloodborne - Progress Tracker
                        </h1>
                        <SaveProgressButton />
                        <ResetProgressButton />
                        <TwitchConnectButton />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">

                        {/* Left Column - Fixed Height, No Scroll */}
                        <div>
                            <Suspense fallback={<div>Loading Stats...</div>}>
                                <CharacterStats gameKey='bb' />
                            </Suspense>
                        </div>

                        {/* Middle Column - Scrollable */}
                        <div className="space-y-6 flex flex-col">
                            <ScrollableCard title="Boss Progression">
                                <Suspense fallback={<div>Loading Bosses...</div>}>
                                    <BossList gameKey='bb' />
                                </Suspense>
                            </ScrollableCard>
                            <ScrollableCard title="Custom Trackers">
                                <Suspense fallback={<div>Loading Trackers...</div>}>
                                    <CustomTrackers />
                                </Suspense>
                            </ScrollableCard>
                        </div>

                        {/* Right Column - Fixed Height, No Scroll */}
                        <div className="space-y-2">
                            <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-zinc-100">Yharnam Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Suspense fallback={<div>Loading Map...</div>}>
                                        <Map gameKey='bb' />
                                    </Suspense>
                                </CardContent>
                            </Card>
                            <ProgressShareLinkGenerator gameKey='bb' />
                            <TwitchChatMonitor />
                        </div>
                    </div>
                </ProgressProvider>
            </div>
        </div >
    );
}
