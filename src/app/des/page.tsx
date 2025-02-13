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

export default function DESPage() {

    return (
        <div className="flex flex-col h-full">
            <div className="max-w-screen-2xl w-full mx-auto flex-1 p-6 h-full">
                <ProgressProvider gameKey='des'>
                    <div className="flex gap-6">
                        <h1 className="text-3xl font-bold mb-6 text-zinc-100">
                            Demon&apos;s Souls - Progress Tracker
                        </h1>
                        <SaveProgressButton />
                        <ResetProgressButton />
                        <TwitchConnectButton />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100%-2rem)]">

                        {/* Left Column - Fixed Height, No Scroll */}
                        <div className='h-full'>
                            <Suspense fallback={<div>Loading Stats...</div>}>
                                <CharacterStats gameKey='des' />
                            </Suspense>
                        </div>

                        {/* Middle Column - Scrollable */}
                        <div className="space-y-6 lg:flex lg:flex-col px-2 h-full overflow-auto">
                            <ScrollableCard title="Boss Progression">
                                <Suspense fallback={<div>Loading Bosses...</div>}>
                                    <BossList gameKey='des' />
                                </Suspense>
                            </ScrollableCard>
                            <ScrollableCard title="Custom Trackers">
                                <Suspense fallback={<div>Loading Trackers...</div>}>
                                    <CustomTrackers />
                                </Suspense>
                            </ScrollableCard>
                        </div>

                        {/* Right Column - Fixed Height, No Scroll */}
                        <div className="h-full space-y-2">
                            <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-zinc-100">Boletaria Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Suspense fallback={<div>Loading Map...</div>}>
                                        <Map gameKey='des' />
                                    </Suspense>
                                </CardContent>
                            </Card>
                            <ProgressShareLinkGenerator gameKey='des' />
                            <TwitchChatMonitor />
                        </div>
                    </div>
                </ProgressProvider>
            </div>
        </div >
    );
}
