'use client';

import { useState } from 'react';
import { bosses } from '@/data/bosses';
import { DEFAULT_PROGRESSES } from '@/data/defaultProgresses';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, Copy, Terminal, Award, Info } from 'lucide-react';

export default function CommandsPage() {
    const [activeGame, setActiveGame] = useState('ds1');
    const [copiedText, setCopiedText] = useState('');

    const gameNames = {
        'des': "Demon's Souls",
        'ds1': 'Dark Souls',
        'ds2': 'Dark Souls II',
        'ds3': 'Dark Souls III',
        'bb': 'Bloodborne',
        'elden': 'Elden Ring'
    };

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(''), 2000);
    };

    const renderBossList = (gameId: string) => {
        const gameBosses = bosses[gameId] || [];
        return (
            <div className="space-y-4">
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-medium text-amber-300">Total bosses: {gameBosses.length}</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                        onClick={() => copyToClipboard(JSON.stringify(gameBosses), 'bosses')}
                    >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'bosses' ? 'Copied!' : 'Copy all'}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {gameBosses.map((boss) => (
                        <div key={boss.id} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                            <div>
                                <p className="font-medium text-zinc-200">{boss.name}</p>
                                <p className="text-xs text-zinc-400">{boss.location}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{boss.id}</code>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 w-7 p-0"
                                    onClick={() => copyToClipboard(boss.id, `boss-${boss.id}`)}
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

    const renderStatsInfo = (gameId: string) => {
        const gameProgress = DEFAULT_PROGRESSES[gameId];
        if (!gameProgress) return <p>No stats available</p>;

        const { playerStats, charStats } = gameProgress;

        return (
            <div className="space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-amber-300">Player Stats</h3>
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                            onClick={() => copyToClipboard(JSON.stringify(playerStats), 'playerStats')}
                        >
                            <Copy className="w-3 h-3 mr-1" />
                            {copiedText === 'playerStats' ? 'Copied!' : 'Copy keys'}
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {Object.keys(playerStats).filter(key => key !== 'game').map((statKey) => (
                            <div key={statKey} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                                <div className="text-zinc-200 capitalize">
                                    {statKey.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                                <div className="flex items-center gap-2">
                                    <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{statKey}</code>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-7 w-7 p-0"
                                        onClick={() => copyToClipboard(statKey, `stat-${statKey}`)}
                                    >
                                        <Copy className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-amber-300">Character Stats</h3>
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-xs text-zinc-200 bg-zinc-700 border-zinc-800"
                            onClick={() => copyToClipboard(JSON.stringify(charStats), 'charStats')}
                        >
                            <Copy className="w-3 h-3 mr-1" />
                            {copiedText === 'charStats' ? 'Copied!' : 'Copy keys'}
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {Object.keys(charStats).map((statKey) => (
                            <div key={statKey} className="bg-zinc-800/50 p-3 rounded border border-zinc-700/50 flex justify-between items-center">
                                <div className="text-zinc-200 capitalize">
                                    {statKey.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                                <div className="flex items-center gap-2">
                                    <code className="bg-zinc-900 text-amber-300 px-2 py-1 rounded text-xs">{statKey}</code>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-7 w-7 p-0"
                                        onClick={() => copyToClipboard(statKey, `char-${statKey}`)}
                                    >
                                        <Copy className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto py-8 px-4 space-y-8">
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
                            Command Reference
                        </span>
                    </CardTitle>
                    <CardDescription>
                        Browse identifiers for bosses and stats by game
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
                                    </TabsList>
                                    <TabsContent value="bosses" className="mt-4">
                                        {renderBossList(gameId)}
                                    </TabsContent>
                                    <TabsContent value="stats" className="mt-4">
                                        {renderStatsInfo(gameId)}
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
    );
}