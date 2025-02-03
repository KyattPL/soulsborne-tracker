import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { saveProgress, loadMarkerProgress } from '../utils/localStorageUtils';

interface MarkerPopupProps {
    marker: {
        id: string;
        name: string;
        type: string;
        description?: string;
    };
    onClose: () => void;
    isDiscovered: boolean;
}

export default function MarkerPopup({ marker, onClose, isDiscovered }: MarkerPopupProps) {
    const handleDiscoverToggle = () => {
        const discoveredMarkers = new Set(loadMarkerProgress() || []);

        if (isDiscovered) {
            discoveredMarkers.delete(marker.id);
        } else {
            discoveredMarkers.add(marker.id);
        }

        saveProgress('ds1-markers', Array.from(discoveredMarkers));
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute left-1/2 top-1/2 -tranzinc-x-1/2 -tranzinc-y-1/2 z-50"
        >
            <Card className="w-64 bg-zinc-800 border-zinc-700">
                <CardHeader className="relative pb-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    <CardTitle className="text-lg">{marker.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    {marker.description && (
                        <p className="text-sm text-zinc-400 mb-4">{marker.description}</p>
                    )}
                    <Button
                        variant={isDiscovered ? "outline" : "default"}
                        className="w-full"
                        onClick={handleDiscoverToggle}
                    >
                        {isDiscovered ? 'Mark as Undiscovered' : 'Mark as Discovered'}
                    </Button>
                </CardContent>
            </Card>

            {/* Click outside to close */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 -z-10"
                onClick={onClose}
            />
        </motion.div>
    );
}