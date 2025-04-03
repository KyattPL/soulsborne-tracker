'use client';

import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card } from '@/components/ui/card';

import { ColorType, ChaliceName, allRequirements } from '@/data/chalices';
import { useProgress } from './ProgressProvider';
import { isBloodborneProgress } from '@/utils/progressGuards';

const dungeonColors = {
    normal: "bg-amber-800 hover:bg-amber-700",
    root: "bg-sky-800 hover:bg-sky-700",
    sinister: "bg-red-800 hover:bg-red-700",
    ritual: "bg-purple-800 hover:bg-purple-700"
};

interface DungeonBlockProps {
    name: ChaliceName;
    type: ColorType;
    hasArrow?: boolean;
    isArrowBottom?: boolean;
    isArrowLeft?: boolean;
    isArrowRight?: boolean;
};

const ChaliceDungeonMap = () => {
    const { progress, updateProgress, isSharedLink } = useProgress();

    const initChalices = isBloodborneProgress(progress) ? progress.chalices : [];

    const [collectedChalices, setCollectedChalices] = useState<ChaliceName[]>(initChalices);

    const toggleCollectedChalice = (name: ChaliceName) => {
        if (isSharedLink || !isBloodborneProgress(progress)) return;

        if (collectedChalices.includes(name)) {
            setCollectedChalices(collectedChalices.filter(c => c !== name));
            updateProgress({
                ...progress,
                chalices: collectedChalices.filter(c => c !== name)
            });
        } else {
            setCollectedChalices([...collectedChalices, name]);
            updateProgress({
                ...progress,
                chalices: [...collectedChalices, name]
            });
        }
    };

    const DungeonBlock = ({ name, type, hasArrow = false, isArrowBottom, isArrowLeft, isArrowRight }: DungeonBlockProps) => {
        const requirements = allRequirements[name] || {};
        let colorClass = dungeonColors[type] || dungeonColors.normal;

        if (!collectedChalices.includes(name)) {
            colorClass = "bg-zinc-800 hover:bg-zinc-700";
        }

        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className={`relative ${hasArrow ? "mb-8" : ""}`}>
                            <Card onClick={() => toggleCollectedChalice(name)}
                                className={`${colorClass} p-3 h-20 text-center flex items-center
                                 justify-center shadow-md border border-zinc-700/50 cursor-pointer text-black text-sm transition-colors duration-200`}
                            >
                                <div className="text-center text-zinc-200">
                                    {name}
                                </div>
                            </Card>
                            {hasArrow && (
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                                    {isArrowBottom && (
                                        <div className="absolute -bottom-6">
                                            <div className="h-14 w-1 bg-zinc-300 relative">
                                                <div className="absolute -bottom-2 -left-1.5 w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-zinc-300 border-r-[8px] border-r-transparent"></div>
                                            </div>
                                        </div>
                                    )}
                                    {isArrowRight && (
                                        <div className="absolute -rotate-90 bottom-16 left-14">
                                            <div className="h-4 w-1 bg-zinc-300 relative">
                                                <div className="absolute -bottom-2 -left-1.5 w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-zinc-300 border-r-[8px] border-r-transparent"></div>
                                            </div>
                                        </div>
                                    )}
                                    {isArrowLeft && (
                                        <div className="absolute rotate-90 bottom-16 right-14">
                                            <div className="h-4 w-1 bg-zinc-300 relative">
                                                <div className="absolute -bottom-2 -left-1.5 w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-zinc-300 border-r-[8px] border-r-transparent"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs p-3 bg-zinc-800 text-white border border-zinc-600">
                        <h4 className="font-bold mb-2">{name} Requirements</h4>
                        <ul className="list-disc pl-5 text-sm">
                            {requirements.materials?.map((material, index) => (
                                <li key={index}>{material}</li>
                            ))}
                        </ul>
                        {requirements.note && <p className="text-sm mt-2">{requirements.note}</p>}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    };

    return (
        <div className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">

            {/* Legend */}
            <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${dungeonColors.normal}`}></div>
                    <span className="text-sm text-zinc-300">Standard Dungeons</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${dungeonColors.root}`}></div>
                    <span className="text-sm text-zinc-300">Root Chalices</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${dungeonColors.sinister}`}></div>
                    <span className="text-sm text-zinc-300">Sinister Chalices</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${dungeonColors.ritual}`}></div>
                    <span className="text-sm text-zinc-300">Special Rituals</span>
                </div>
            </div>

            {/* Grid container */}
            <div className="flex flex-col gap-8 mt-8">
                {/* Depth labels */}
                <div className="flex">
                    <div className="w-full">
                        {/* Depth 1 */}
                        <div className="grid grid-cols-9 gap-4 mb-8 relative">
                            <div className="col-span-9 absolute -top-8 right-0 text-zinc-400 font-semibold">Depth 1</div>
                            <div className="col-span-1">
                                <DungeonBlock name="Pthumeru Root Labyrinth" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Pthumeru Labyrinth" type="normal" hasArrow={true} isArrowLeft isArrowBottom />
                            </div>
                        </div>

                        {/* Depth 2 */}
                        <div className="grid grid-cols-9 gap-4 mb-8 relative">
                            <div className="col-span-9 absolute -top-8 right-0 text-zinc-400 font-semibold">Depth 2</div>
                            <div className="col-span-1">
                                <DungeonBlock name="Central Pthumeru Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Central Pthumeru" type="normal" hasArrow={true} isArrowLeft isArrowBottom />
                            </div>
                            <div className="absolute -rotate-90 -bottom-12 left-[336px]">
                                <div className="h-60 w-1 bg-zinc-300 relative">
                                    <div className="absolute -bottom-2 -left-1.5 w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-zinc-300 border-r-[8px] border-r-transparent"></div>
                                </div>
                            </div>
                            <div className="col-span-2"></div>
                            <div className="col-span-1">
                                <DungeonBlock name="Hintertomb" type="normal" hasArrow={true} isArrowBottom isArrowRight />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Hintertomb Root" type="root" />
                            </div>
                        </div>

                        {/* Depth 3 */}
                        <div className="grid grid-cols-9 gap-4 mb-8 relative">
                            <div className="col-span-9 absolute -top-8 right-0 text-zinc-400 font-semibold">Depth 3</div>
                            <div className="col-span-1">
                                <DungeonBlock name="Lower Pthumeru Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Lower Pthumeru" type="normal" hasArrow={true} isArrowLeft isArrowBottom isArrowRight />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Sinister Lower Pthumeru" type="sinister" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Sinister Lower Hintertomb" type="sinister" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Lower Hintertomb" type="normal" hasArrow={true} isArrowLeft isArrowRight />
                            </div>
                            <div className="absolute -rotate-90 -bottom-[128px] left-[640px]">
                                <div className="h-8 w-1 rotate-90 bg-zinc-300" />
                                <div className="h-64 w-1 right-4 bottom-4 bg-zinc-300 relative" />
                                <div className="absolute -rotate-90 bottom-[6px] right-1">
                                    <div className="h-6 w-1 bg-zinc-300 relative">
                                        <div className="absolute -bottom-2 -left-1.5 w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-zinc-300 border-r-[8px] border-r-transparent"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Lower Hintertomb Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Short Ritual Chalice" type="ritual" />
                            </div>
                        </div>

                        {/* Depth 4 */}
                        <div className="grid grid-cols-9 gap-4 mb-8 relative">
                            <div className="col-span-9 absolute -top-8 right-0 text-zinc-400 font-semibold">Depth 4</div>
                            <div className="col-span-1">
                                <DungeonBlock name="Cursed and Defiled Pthumeru Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Defiled Pthumeru" type="normal" hasArrow={true} isArrowLeft isArrowBottom />
                            </div>
                            <div className=""></div>
                            <div className="col-span-1">
                                <DungeonBlock name="Ailing Loran Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Ailing Loran" type="normal" hasArrow={true} isArrowLeft isArrowBottom />
                            </div>
                        </div>

                        {/* Depth 5 */}
                        <div className="grid grid-cols-9 gap-4 relative">
                            <div className="col-span-9 absolute -top-8 right-0 text-zinc-400 font-semibold">Depth 5</div>
                            <div className="col-span-1">
                                <DungeonBlock name="Pthumeru Ihyll Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Great Pthumeru Ihyll" type="normal" hasArrow isArrowLeft isArrowRight />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Sinister Pthumeru Ihyll Root" type="sinister" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Lower Ailing Loran Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Lower Ailing Loran" type="normal" hasArrow isArrowLeft isArrowRight />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Sinister Lower Loran Root" type="sinister" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Isz Root" type="root" />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Great Isz" type="normal" hasArrow isArrowLeft isArrowRight />
                            </div>
                            <div className="col-span-1">
                                <DungeonBlock name="Sinister Isz Root" type="sinister" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChaliceDungeonMap;