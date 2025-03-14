'use client';

import { useState } from 'react';
import { encode } from 'js-base64';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';

import { useProgress } from '@/components/ProgressProvider';

export default function ProgressShareLinkGenerator({ gameKey }: { gameKey: string }) {
    const { isSharedLink, progress } = useProgress();
    const [shareLink, setShareLink] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const generateShareableLink = () => {
        const encodedData = encode(JSON.stringify(progress), true);
        const link = `${window.location.origin}/${gameKey}?p=${encodedData}`;

        setShareLink(link);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(shareLink);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return isSharedLink ? <></> : (
        <Card className="bg-zinc-800/50 border-zinc-700/50">
            <CardHeader>
                <CardTitle className='text-zinc-200'>Progress Sharing</CardTitle>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full bg-amber-800 hover:bg-amber-600">
                            Generate Shareable Link
                        </Button>
                    </DialogTrigger>
                    <DialogContent className='bg-zinc-900 border-zinc-800'>
                        <DialogHeader>
                            <DialogTitle className='text-amber-500'>Shareable Progress Link</DialogTitle>
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
                            className="w-full bg-amber-900 hover:bg-amber-800 text-amber-100 border-amber-800"
                        >
                            Generate Link
                        </Button>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}