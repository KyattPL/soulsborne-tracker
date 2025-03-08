'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const SCROLL_OFFSET_PX = 20;

const ScrollableCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [showTopGradient, setShowTopGradient] = useState(false);
    const [showBottomGradient, setShowBottomGradient] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

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

            const scrollTop = cardArea?.scrollTop || 0;
            const scrollHeight = cardArea?.scrollHeight || 0;
            const clientHeight = cardArea?.clientHeight || 0;
            setShowTopGradient(scrollTop > SCROLL_OFFSET_PX);
            setShowBottomGradient(scrollTop + clientHeight + SCROLL_OFFSET_PX < scrollHeight);
        }
    };

    return (
        <ScrollArea type="always" ref={contentRef} onScrollCapture={checkScroll} className='h-72'>
            <div
                className="absolute top-0 h-4 w-full bg-gradient-to-b from-black to-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{ opacity: showTopGradient ? 1 : 0 }}
            />
            <div
                className="absolute bottom-0 h-4 w-full bg-gradient-to-t from-black to-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{ opacity: showBottomGradient ? 1 : 0 }}
            />

            <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                    <CardTitle className="text-zinc-100">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </ScrollArea>
    );
};

export default ScrollableCard;