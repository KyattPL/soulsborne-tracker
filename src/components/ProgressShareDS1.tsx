'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { encode, decode } from 'js-base64';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';

export default function ProgressShareManager() {
    const searchParams = useSearchParams();
    const [shareLink, setShareLink] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const generateShareableLink = () => {
        const playerStats = JSON.parse(localStorage.getItem('playerStats') || '{}');
        const charStats = JSON.parse(localStorage.getItem('charStats') || '{}');
        const defeatedBosses = JSON.parse(localStorage.getItem('defeatedBosses') || '[]');
        const customTrackers = JSON.parse(localStorage.getItem('customTrackers') || '[]');

        const progressData = {
            playerStats,
            charStats,
            defeatedBosses,
            customTrackers
        };

        const encodedData = encode(JSON.stringify(progressData));
        const link = `${window.location.origin}/ds1?p=${encodedData}`;

        setShareLink(link);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(shareLink);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };



    useEffect(() => {
        const decodeFromLink = () => {
            const encodedString = searchParams.get('p');
            if (encodedString) {
                const progressData = JSON.parse(decode(encodedString));
                console.log(progressData);
            }
        };

        decodeFromLink();
    }, [searchParams]);

    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50">
            <CardHeader>
                <CardTitle className='text-zinc-200'>Progress Sharing</CardTitle>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                            Generate Shareable Link
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className='text-zinc-800'>Shareable Progress Link</DialogTitle>
                        </DialogHeader>
                        <div className="flex space-x-2">
                            <Input
                                value={shareLink}
                                readOnly
                                className="flex-grow text-zinc-800"
                                placeholder="Your shareable link will appear here"
                            />
                            <Button className={`${isCopied ? 'text-zinc-200' : 'text-zinc-800'}`}
                                onClick={copyLink}
                                variant={isCopied ? "default" : "outline"}
                            >
                                {isCopied ? "Copied!" : <Copy />}
                            </Button>
                        </div>
                        <Button
                            onClick={generateShareableLink}
                            className="w-full"
                        >
                            Generate Link
                        </Button>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}