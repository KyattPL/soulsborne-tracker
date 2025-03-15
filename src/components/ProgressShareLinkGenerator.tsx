'use client';

import { useState } from 'react';
import { encode } from 'js-base64';

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
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="lg" className="bg-amber-800 hover:bg-amber-600 text-amber-100 border 
                border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2">
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
    );
}