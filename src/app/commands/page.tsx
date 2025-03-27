'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Terminal, Award, Info, Package } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import BossList from './BossList';
import StatsInfo from './StatsInfo';
import EquipmentList from './EquipmentList';

const SCROLL_OFFSET_PX = 50;

export default function CommandsPage() {
    const [activeGame, setActiveGame] = useState('ds1');
    const [copiedText, setCopiedText] = useState('');

    const [showTopGradient, setShowTopGradient] = useState(false);
    const [showBottomGradient, setShowBottomGradient] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    const gameNames = {
        'des': "Demon's Souls",
        'ds1': 'Dark Souls',
        'ds2': 'Dark Souls II',
        'ds3': 'Dark Souls III',
        'bb': 'Bloodborne',
        'elden': 'Elden Ring'
    };

    useEffect(() => {
        const cardArea = contentRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        const scrollHeight = cardArea?.scrollHeight || 0;
        const clientHeight = cardArea?.clientHeight || 0;

        if (scrollHeight === clientHeight) {
            setShowBottomGradient(false);
        }
    }, []);

    const checkScroll = () => {
        if (contentRef.current) {
            const cardArea = contentRef.current?.querySelector('[data-radix-scroll-area-viewport]');

            console.log(cardArea);

            const scrollTop = cardArea?.scrollTop || 0;
            const scrollHeight = cardArea?.scrollHeight || 0;
            const clientHeight = cardArea?.clientHeight || 0;
            setShowTopGradient(scrollTop > SCROLL_OFFSET_PX);
            setShowBottomGradient(scrollTop + clientHeight + SCROLL_OFFSET_PX < scrollHeight);
        }
    };

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(''), 2000);
    };

    return (
        <ScrollArea type="auto" ref={contentRef} onScrollCapture={checkScroll} className='w-screen'>
            <div
                className="absolute top-0 h-4 w-full bg-gradient-to-b from-black to-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{ opacity: showTopGradient ? 1 : 0 }}
            />
            <div
                className="absolute bottom-0 h-4 w-full bg-gradient-to-t from-black to-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{ opacity: showBottomGradient ? 1 : 0 }}
            />
            <div className="h-full w-2/3 mx-auto py-8 px-4 space-y-8">
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-3xl font-bold">Twitch Commands Reference</h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Find all the command identifiers you need to control your tracker through Twitch chat.
                    </p>
                </div>

                <Card className="bg-zinc-900/90 border-zinc-800">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Terminal className="w-5 h-5 mr-2 text-amber-400" />
                            <span className='text-amber-500'>
                                Available Commands
                            </span>
                        </CardTitle>
                        <CardDescription>
                            These commands can be used by viewers or mods in your Twitch chat once connected
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-zinc-800">
                                <AccordionTrigger className="hover:text-amber-300 text-amber-500">Boss Commands</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 pl-4 border-l-2 border-zinc-800">
                                        <div className="flex items-start gap-4">
                                            <code className="bg-zinc-800 text-amber-300 px-2 py-1 rounded">!bossdone &lt;boss-id&gt;</code>
                                            <p className="text-zinc-300">Toggle boss defeated status. Usage: !bossdone phalanx</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <code className="bg-zinc-800 text-amber-300 px-2 py-1 rounded">!boss &lt;boss-id&gt; &lt;value&gt;</code>
                                            <p className="text-zinc-300">Update number of attempts for a boss. Usage: !boss phalanx +4</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-zinc-800">
                                <AccordionTrigger className="hover:text-amber-300 text-amber-500">Stats Commands</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 pl-4 border-l-2 border-zinc-800">
                                        <div className="flex items-start gap-4">
                                            <code className="bg-zinc-800 text-amber-300 px-2 py-1 rounded">!playerstat &lt;stat-key&gt; &lt;value&gt;</code>
                                            <p className="text-zinc-300">Update player stat value. Usage: !playerstat soulLevel +5</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <code className="bg-zinc-800 text-amber-300 px-2 py-1 rounded">!charstat &lt;stat-key&gt; &lt;value&gt;</code>
                                            <p className="text-zinc-300">Update character stat value. Usage: !charstat vitality +3</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-zinc-800">
                                <AccordionTrigger className="hover:text-amber-300 text-amber-500">Tracker Commands</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 pl-4 border-l-2 border-zinc-800">
                                        <div className="flex items-start gap-4">
                                            <code className="bg-zinc-800 text-amber-300 px-2 py-1 rounded">!track &lt;tracker-id&gt; &lt;value&gt;</code>
                                            <p className="text-zinc-300">Update tracker value. Usage: !track 1 +2 (First tracker
                                                gets id of &apos;1&apos;, second of &apos;2&apos; and so on - removing the first
                                                tracker will change the id of the second one to &apos;1&apos;).
                                            </p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-zinc-800">
                                <AccordionTrigger className="hover:text-amber-300 text-amber-500">General Commands</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 pl-4 border-l-2 border-zinc-800">
                                        <div className="flex items-start gap-4">
                                            <code className="bg-zinc-800 text-amber-300 px-2 py-1 rounded">!getprogress</code>
                                            <p className="text-zinc-300">Get link to the progress site. Usage: !getprogress (link should be sent to
                                                to chat assuming user Authorized Twitch on the home page).
                                            </p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900/90 border-zinc-800">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Info className="w-5 h-5 mr-2 text-amber-400" />
                            <span className='text-amber-500'>
                                IDs Reference
                            </span>
                        </CardTitle>
                        <CardDescription>
                            Browse identifiers for bosses, stats and equipment by game
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={activeGame} onValueChange={setActiveGame}>
                            <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-zinc-800/50">
                                {Object.entries(gameNames).map(([id, name]) => (
                                    <TabsTrigger
                                        key={id}
                                        value={id}
                                        className="data-[state=active]:bg-amber-900/50 data-[state=active]:text-amber-100"
                                    >
                                        {name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {Object.keys(gameNames).map((gameId) => (
                                <TabsContent key={gameId} value={gameId} className="mt-6">
                                    <Tabs defaultValue="bosses">
                                        <TabsList className="bg-zinc-800/50">
                                            <TabsTrigger
                                                value="bosses"
                                                className="data-[state=active]:bg-amber-900/50 data-[state=active]:text-amber-100"
                                            >
                                                <Award className="w-4 h-4 mr-2" />
                                                Bosses
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="stats"
                                                className="data-[state=active]:bg-amber-900/50 data-[state=active]:text-amber-100"
                                            >
                                                <ChevronRight className="w-4 h-4 mr-2" />
                                                Stats
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="equipment"
                                                className="data-[state=active]:bg-amber-900/50 data-[state=active]:text-amber-100"
                                            >
                                                <Package className="w-4 h-4 mr-2" />
                                                Equipment
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="bosses" className="mt-4">
                                            <BossList gameId={gameId} copiedText={copiedText} copyToClipboard={copyToClipboard} />
                                        </TabsContent>
                                        <TabsContent value="stats" className="mt-4">
                                            <StatsInfo gameId={gameId} copiedText={copiedText} copyToClipboard={copyToClipboard} />
                                        </TabsContent>
                                        <TabsContent value="equipment" className="mt-4">
                                            <EquipmentList gameId={gameId} copiedText={copiedText} copyToClipboard={copyToClipboard} />
                                        </TabsContent>
                                    </Tabs>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>

                <div className="text-center text-zinc-500 text-sm mt-8">
                    <p>All commands must be used in a Twitch chat that is connected to your tracker.</p>
                </div>
            </div>
        </ScrollArea>
    );
}