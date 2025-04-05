'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProgress } from '../ProgressProvider';

const TwitchConnectButton = () => {
    const { isTwitchConnected, twitchChannel, isSharedLink, setIsTwitchConnected, setTwitchChannel } = useProgress();

    const [channelName, setChannelName] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleConnect = (event: React.FormEvent) => {
        event.preventDefault();
        setIsDialogOpen(false);
        setIsTwitchConnected(true);
        setTwitchChannel(channelName);
    };

    const handleDisconnect = () => {
        setIsTwitchConnected(false);
        setTwitchChannel('');
    };

    const buttonElement = isTwitchConnected ? (
        <div className="flex items-center gap-2">
            <Button
                variant="destructive"
                size="lg"
                onClick={handleDisconnect}
                className="bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-800/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2"
            >
                <X className="w-4 h-4" />
                Disconnect Twitch
            </Button>
            <div className="text-sm text-zinc-400 flex items-center gap-2">
                <span className="flex items-center">
                    Connected to Twitch chat: <span className="text-purple-400 ml-1">{twitchChannel}</span>
                </span>
            </div>
        </div>
    ) : (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-800/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2"
                >
                    <MessageSquare className="w-4 h-4" />
                    Connect Twitch Chat
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-800">
                <form onSubmit={handleConnect}>
                    <DialogHeader>
                        <DialogTitle className="text-purple-400">Connect to Twitch Chat</DialogTitle>
                        <DialogDescription className='text-zinc-400'>
                            Enter your Twitch channel name to enable chat commands for tracking progress.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                        <Label htmlFor="channel" className="text-zinc-200">Channel Name</Label>
                        <Input
                            id="channel"
                            value={channelName}
                            onChange={(e) => setChannelName(e.target.value)}
                            className="bg-zinc-800 border-zinc-700 text-zinc-100"
                            placeholder="Enter your channel name"
                            required
                        />
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => setIsDialogOpen(false)}
                            className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-purple-900 hover:bg-purple-800 text-purple-100 border-purple-800"
                        >
                            Connect
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );

    return isSharedLink ? <></> : buttonElement;
};

export default TwitchConnectButton;