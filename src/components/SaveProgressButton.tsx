'use client';
import React from 'react';

import { useProgress } from './ProgressProvider';
import { Button } from './ui/button';
import { Save } from 'lucide-react';


export const SaveProgressButton = () => {
    const { isSharedLink, isUnsavedProgress, saveProgress } = useProgress();

    return isSharedLink ? <></> : (
        <div className="relative">
            <Button
                onClick={saveProgress}
                disabled={!isUnsavedProgress}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2"
                size="lg"
            >
                <Save className="w-4 h-4" />
                Save Progress
            </Button>
        </div>
    )
}

export default SaveProgressButton;