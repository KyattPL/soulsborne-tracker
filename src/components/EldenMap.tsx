'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Maximize2, X } from 'lucide-react';

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

export default function EldenMap() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <div className="w-full space-y-4">

            {/* Normal View */}
            <div className="relative bg-zinc-800 rounded-lg overflow-hidden h-[300px]">
                {!isFullscreen && (
                    <button
                        onClick={() => setIsFullscreen(true)}
                        className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors"
                        aria-label="Enter fullscreen"
                    >
                        <Maximize2 size={20} className="text-white" />
                    </button>
                )}
                <iframe src="https://mapgenie.io/elden-ring/maps/the-lands-between?embed=light" height="500"
                    style={{ position: "relative", width: "100%" }}>
                </iframe>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {isFullscreen && (
                    <MapModal
                        isOpen={isFullscreen}
                        onClose={() => setIsFullscreen(false)}
                    >
                        <iframe src="https://mapgenie.io/elden-ring/maps/the-lands-between?embed=light" height="100%"
                            style={{ position: "relative", width: "100%" }}>
                        </iframe>
                    </MapModal>
                )}
            </AnimatePresence>
        </div>
    );
}