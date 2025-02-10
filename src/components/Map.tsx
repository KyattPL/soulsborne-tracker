'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Image from 'next/image';
import mapMarkers from '@/data/mapMarkers.json';
import {
    ZoomIn,
    ZoomOut,
    RefreshCw,
} from 'lucide-react';

interface MapMarker {
    id: number;
    x: number;
    y: number;
    type: string;
    name: string;
    description: string;
}

export default function ZoomableMap() {
    const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
    const [activeFilter, setActiveFilter] = useState<'all' | 'bosses' | 'bonfires' | 'items'>('all');

    // Filter markers based on both level and active filter
    const filteredMarkers = mapMarkers.filter(marker =>
        (activeFilter === 'all' || marker.type === activeFilter)
    );

    // Filter button configuration
    const filterButtons = [
        { value: 'all', label: 'All', color: 'bg-green-500' },
        { value: 'bosses', label: 'Bosses', color: 'bg-red-500' },
        { value: 'bonfires', label: 'Bonfires', color: 'bg-orange-500' },
        { value: 'items', label: 'Key Items', color: 'bg-blue-500' }
    ];

    return (
        <div className="space-y-4">
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-2 mb-4">
                {filterButtons.map((button) => (
                    <button
                        key={button.value}
                        onClick={() => setActiveFilter(button.value as typeof activeFilter)}
                        className={`
                            px-3 py-1 rounded-full flex items-center space-x-2
                            ${activeFilter === button.value
                                ? `${button.color} text-white`
                                : 'bg-zinc-800 text-zinc-400'}
                        `}
                    >
                        <span className={`w-2 h-2 rounded-full ${button.color}`} />
                        <span>{button.label}</span>
                    </button>
                ))}
            </div>

            {/* Zoomable Map Container */}
            <div className="relative bg-zinc-800 rounded-lg overflow-hidden">
                <TransformWrapper
                    initialScale={2}
                    minScale={2}
                    maxScale={7}
                    centerOnInit={true}
                    panning={{
                        velocityDisabled: true
                    }}
                    wheel={{
                        step: 0.5
                    }}
                >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                            {/* Zoom Controls */}
                            <div className="absolute top-4 right-4 z-50 flex flex-col space-y-2">
                                <button
                                    onClick={() => zoomIn()}
                                    className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full"
                                >
                                    <ZoomIn size={20} className="text-white" />
                                </button>
                                <button
                                    onClick={() => zoomOut()}
                                    className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full"
                                >
                                    <ZoomOut size={20} className="text-white" />
                                </button>
                                <button
                                    onClick={() => resetTransform()}
                                    className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full"
                                >
                                    <RefreshCw size={20} className="text-white" />
                                </button>
                            </div>

                            {/* Transformed Map Component */}
                            <TransformComponent
                                wrapperStyle={{
                                    maxHeight: "400px",
                                }}
                            >
                                <div className="relative h-[400px] w-[420px]">
                                    <Image
                                        src={`/soulsborne-tracker/images/ds1/ds1-map.png`}
                                        alt={`Lordran Map`}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        fill
                                    />

                                    {/* Markers */}
                                    {filteredMarkers.map(marker => (
                                        <div
                                            key={marker.id}
                                            className="absolute cursor-pointer group"
                                            style={{
                                                left: `${marker.x}%`,
                                                top: `${marker.y}%`
                                            }}
                                            onClick={() => setSelectedMarker(marker)}
                                        >
                                            <div
                                                className={`
                                                    w-2 h-2 rounded-full 
                                                    ${marker.type === 'bosses' ? 'bg-red-500' :
                                                        marker.type === 'bonfires' ? 'bg-orange-500' :
                                                            marker.type === 'items' ? 'bg-blue-500' :
                                                                'bg-green-500'}
                                                    group-hover:scale-150 transition-transform
                                                `}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </TransformComponent>
                        </>
                    )}
                </TransformWrapper>

                {/* Marker Details Popup */}
                <AnimatePresence>
                    {selectedMarker && (
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-black/90 p-4 text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold">{selectedMarker.name}</h3>
                                    <p className="text-zinc-300">{selectedMarker.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedMarker(null)}
                                    className="bg-zinc-700 hover:bg-zinc-600 px-3 py-1 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}