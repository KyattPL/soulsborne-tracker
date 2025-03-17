'use client';
import { RotateCcw } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useProgress } from '@/components/ProgressProvider';

const ResetProgressButton = () => {
    const { resetProgress, isSharedLink } = useProgress();

    return isSharedLink ? <></> : (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" size="lg" className="bg-amber-800 hover:bg-amber-600 text-amber-100 border 
                border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Reset Progress
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-900 border-zinc-800">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-amber-500">Reset All Progress?</AlertDialogTitle>
                    <AlertDialogDescription className="text-lg text-zinc-400">
                        This action cannot be undone. This will permanently delete all your tracked progress
                        including boss defeats, custom trackers, and character stats.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={resetProgress}
                        className="bg-amber-900 hover:bg-amber-800 text-amber-100 border-amber-800"
                    >
                        Reset Progress
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ResetProgressButton