'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function HelpButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-20 right-16 z-50 hidden md:block">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button
                        size="icon"
                        className="rounded-full w-12 h-12 bg-amber-800 hover:bg-amber-600 text-amber-100 border border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200"
                        aria-label="Help"
                    >
                        <HelpCircle className="w-6 h-6" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-amber-400 text-xl">Twitch Integration Help</DialogTitle>
                        <DialogDescription className="text-zinc-400">
                            Learn how to use the Twitch features in the Soulsborne Tracker
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-4 text-zinc-200">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-amber-300">Home Page: Twitch Authorization</h3>
                            <p>
                                The <span className="font-medium text-amber-300">Authorize Twitch</span> button on the home page
                                connects your Twitch account to the Soulsborne Tracker using Twitch&apos;s OAuth system.
                            </p>
                            <p>
                                Authorizing your Twitch account allows the tracker to integrate with your Twitch channel,
                                enabling enhanced features like sending messages to a specific chatroom.
                            </p>
                            <div className="bg-zinc-800 p-3 rounded-md border border-zinc-700 mt-2">
                                <p className="text-sm text-zinc-400">
                                    <span className="font-medium text-amber-300">Note:</span> Authentication is required only once and grants the tracker permission to interact with Twitch chat.
                                    You can disconnect at any time by clicking the <span className="font-medium text-amber-300">Disconnect Twitch</span> button.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-amber-300">Game Pages: Twitch Chat Connection</h3>
                            <p>
                                The <span className="font-medium text-amber-300">Connect Twitch Chat</span> button on individual game pages
                                allows you to link your progress tracker to a specific Twitch channel.
                            </p>
                            <p>
                                This enables the tracker to receive commands sent via chat:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-zinc-300">
                                <li>!charstat - Modify a character stat. Usage: !charstat vitality +2</li>
                                <li>!playerstat - Modify a player stat. Usage: !playerstat soulLevel +2</li>
                                <li>!boss - Modify boss attempts. Usage: !boss asylum-demon +1</li>
                                <li>!bossdone - Toggle boss completion. Usage: !bossdone asylum-demon</li>
                                <li>!track - Modify custom tracker. Usage: !track tracker-1 +1</li>
                                <li>!getprogress - Get shareable link for streamer&apos;s progress. Usage: !getprogress
                                    <br />
                                    <b>(WARNING: Requires Home Page Twitch Auth to send progress back to the chat)</b>
                                </li>
                            </ul>
                            <div className="bg-zinc-800 p-3 rounded-md border border-zinc-700 mt-2">
                                <p className="text-sm text-zinc-400">
                                    <span className="font-medium text-amber-300">Note:</span> This works more like a
                                    chat listener. You can listen to ANY chatroom you want, but the commands will only
                                    work on the tracker if they are issued by a moderator or a broadcaster (So in practice
                                    you&apos;d probably only use it for your own chat).
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-zinc-800">
                            <p className="text-sm text-zinc-400">
                                For more detailed instruction on commands (such as boss ids), go
                                <Link className="font-medium text-amber-300" href='/commands'> here</Link>
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}