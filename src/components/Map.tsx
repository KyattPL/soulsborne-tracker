'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import {
    ZoomIn,
    ZoomOut,
    RefreshCw,
    Maximize2,
    X
} from 'lucide-react';

import { MAPS } from '@/data/maps';

const MapModal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!isOpen) return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
            <motion.div
                className="absolute inset-0 bg-black/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            <motion.div
                className="relative bg-zinc-800 rounded-lg overflow-hidden z-[9999] w-[90vw] h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-[9999] bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors"
                    aria-label="Close fullscreen"
                >
                    <X size={20} className="text-white" />
                </button>
                {children}
            </motion.div>
        </motion.div>,
        document.body
    );
};

export default function ZoomableMap({ gameKey }: { gameKey: string }) {
    const [selectedMap, setSelectedMap] = useState(MAPS[gameKey][0]);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const MapContent = ({ isModalView = false }) => (
        <TransformWrapper
            initialScale={1.5}
            minScale={1}
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
                    <div className={`absolute ${isModalView ? 'top-16' : 'top-4'} right-4 z-50 flex flex-col space-y-2`}>
                        <button
                            onClick={() => zoomIn()}
                            className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors"
                            aria-label="Zoom in"
                        >
                            <ZoomIn size={20} className="text-white" />
                        </button>
                        <button
                            onClick={() => zoomOut()}
                            className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors"
                            aria-label="Zoom out"
                        >
                            <ZoomOut size={20} className="text-white" />
                        </button>
                        <button
                            onClick={() => resetTransform()}
                            className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors"
                            aria-label="Reset zoom"
                        >
                            <RefreshCw size={20} className="text-white" />
                        </button>
                        {!isModalView && (
                            <button
                                onClick={() => setIsFullscreen(true)}
                                className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors"
                                aria-label="Enter fullscreen"
                            >
                                <Maximize2 size={20} className="text-white" />
                            </button>
                        )}
                    </div>

                    <TransformComponent wrapperStyle={{ height: '100%', width: '100%' }} contentStyle={{ height: '100%', width: '100%' }}>
                        <div className="w-full h-full relative">
                            <Image
                                src={selectedMap.imagePath}
                                alt={`${selectedMap.name} Map`}
                                className="object-contain"
                                fill
                            />
                        </div>
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );

    return (
        <div className="w-full space-y-4">
            <select
                value={selectedMap.id}
                onChange={(e) => {
                    const newMap = MAPS[gameKey].find(map => map.id === e.target.value);
                    if (newMap) setSelectedMap(newMap);
                }}
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
                {MAPS[gameKey].map((map) => (
                    <option key={map.id} value={map.id}>
                        {map.name}
                    </option>
                ))}
            </select>

            {/* Normal View */}
            <div className="relative bg-zinc-800 rounded-lg overflow-hidden h-[300px]">
                <MapContent />
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {isFullscreen && (
                    <MapModal
                        isOpen={isFullscreen}
                        onClose={() => setIsFullscreen(false)}
                    >
                        <MapContent isModalView />
                    </MapModal>
                )}
            </AnimatePresence>
        </div>
    );
}