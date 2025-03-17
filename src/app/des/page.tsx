import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import BossList from '@/components/BossList';
import CharacterStats from '@/components/CharacterStats';
import Map from '@/components/Map';
import CustomTrackers from '@/components/CustomTrackers';
import ScrollableCard from '@/components/ScrollableCard';
import { ProgressProvider } from '@/components/ProgressProvider';
import ProgressShareLinkGenerator from '@/components/buttons/ProgressShareLinkGenerator';
import SaveProgressButton from '@/components/buttons/SaveProgressButton';
import ResetProgressButton from '@/components/buttons/ResetProgressButton';
import { TwitchChatMonitor } from '@/components/twitch/TwitchChatMonitor';
import TwitchConnectButton from '@/components/twitch/TwitchConnectButton';
import Equipment from '@/components/equipment/Equipment';

export default function DESPage() {

    return (
        <ProgressProvider gameKey='des'>
            <div className="flex h-full bg-zinc-900 w-screen flex-col xl:flex-row">
                {/* Sidebar */}
                <div className="m-auto my-4 w-4/5 rounded-2xl xl:rounded-none xl:my-0 xl:m-0 xl:w-1/2 2xl:w-1/3 bg-zinc-800/50 border-r border-zinc-700/50 flex flex-col">
                    <div className="p-4 border-b border-zinc-700/50 flex flex-row gap-4 items-center">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold text-amber-500/90 tracking-wider">
                                Demon&apos;s Souls
                            </h1>
                            <p className="text-zinc-400 text-sm">Progress Tracker</p>
                        </div>
                        <TwitchChatMonitor />
                        <ProgressShareLinkGenerator gameKey='des' />
                    </div>

                    {/* Character Stats Panel */}
                    <div className="p-4 flex-1 overflow-auto">
                        <Suspense fallback={<div>Loading Stats...</div>}>
                            <CharacterStats gameKey='des' />
                        </Suspense>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 border-t border-zinc-700/50 flex gap-4 2xl:flex-wrap">
                        <SaveProgressButton />
                        <ResetProgressButton />
                        <TwitchConnectButton />
                    </div>
                </div>

                {/* Main Content */}
                <div className="m-auto w-4/5 xl:m-0 xl:w-1/2 2xl:w-2/3">
                    {/* Tabs Navigation */}
                    <Tabs defaultValue="bosses" className="h-full flex flex-col">
                        <div className="bg-zinc-800/30 border-b border-zinc-700/50">
                            <TabsList className="bg-transparent p-0">
                                <TabsTrigger value="bosses" className="px-6 py-3 data-[state=active]:bg-zinc-800/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-500/90 data-[state=active]:text-amber-500 rounded-none">
                                    Bosses
                                </TabsTrigger>
                                <TabsTrigger value="maps" className="px-6 py-3 data-[state=active]:bg-zinc-800/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-500/90 data-[state=active]:text-amber-500 rounded-none">
                                    Maps
                                </TabsTrigger>
                                <TabsTrigger value="equipment" className="px-6 py-3 data-[state=active]:bg-zinc-800/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-500/90 data-[state=active]:text-amber-500 rounded-none">
                                    Equipment
                                </TabsTrigger>
                                <TabsTrigger value="custom" className="px-6 py-3 data-[state=active]:bg-zinc-800/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-500/90 data-[state=active]:text-amber-500 rounded-none">
                                    Custom
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Content Areas */}
                        <div className="flex-1 py-2 pl-16 pr-24 mb-2 overflow-auto">
                            {/* Bosses Tab */}
                            <TabsContent value="bosses" className='overflow-auto'>
                                <Suspense fallback={<div>Loading bosses...</div>}>
                                    <ScrollableCard title='Boss tracker'>
                                        <BossList gameKey='des' />
                                    </ScrollableCard>
                                </Suspense>
                            </TabsContent>

                            {/* Maps Tab */}
                            <TabsContent value="maps" className="mt-2">
                                <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-zinc-100">Boletaria</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Suspense fallback={<div>Loading Map...</div>}>
                                            <Map gameKey='des' />
                                        </Suspense>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Equipment Tab */}
                            <TabsContent value="equipment" className="mt-2 overflow-auto">
                                <Suspense fallback={<div>Loading equipment...</div>}>
                                    <ScrollableCard title="Equipment">
                                        <Equipment gameKey='des' />
                                    </ScrollableCard>
                                </Suspense>
                            </TabsContent>

                            {/* Custom Tab */}
                            <TabsContent value="custom" className="mt-2">
                                <ScrollableCard title="Custom Trackers">
                                    <Suspense fallback={<div>Loading Trackers...</div>}>
                                        <CustomTrackers />
                                    </Suspense>
                                </ScrollableCard>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </ProgressProvider>
    );
}
