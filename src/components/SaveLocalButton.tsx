'use client';
import React from 'react';

import { useProgress } from './ProgressProvider';


export const SaveLocalButton = () => {
    const { progress } = useProgress();

    return (
        <div className='absolute bottom-8 right-8'>
            <button>SAVE LOCALLY</button>
            <span>{JSON.stringify(progress)}</span>
        </div>
    )
}

export default SaveLocalButton;