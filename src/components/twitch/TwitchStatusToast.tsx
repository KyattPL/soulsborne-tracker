// TwitchStatusToast.tsx
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { useTwitchConnection } from './TwitchConnectionContext';

export function TwitchStatusToast() {
    const { connectionStatus, statusMessage } = useTwitchConnection();

    const getStatusDetails = () => {
        switch (connectionStatus) {
            case 'connected':
                return {
                    icon: <CheckCircle className="h-5 w-5 text-green-400" />,
                    title: 'Connected',
                    bgColor: 'bg-green-900/80',
                    borderColor: 'border-green-700'
                };
            case 'disconnected':
                return {
                    icon: <XCircle className="h-5 w-5 text-red-400" />,
                    title: 'Disconnected',
                    bgColor: 'bg-red-900/80',
                    borderColor: 'border-red-700'
                };
            case 'error':
                return {
                    icon: <AlertCircle className="h-5 w-5 text-yellow-400" />,
                    title: 'Connection Error',
                    bgColor: 'bg-yellow-900/80',
                    borderColor: 'border-yellow-700'
                };
            case 'reconnecting':
                return {
                    icon: <RefreshCw className="h-5 w-5 text-blue-400 animate-spin" />,
                    title: 'Reconnecting',
                    bgColor: 'bg-blue-900/80',
                    borderColor: 'border-blue-700'
                };
            default:
                return null;
        }
    };

    const details = getStatusDetails();

    if (!connectionStatus || !details) return null;

    return (
        <AnimatePresence>
            <motion.div
                key={`${connectionStatus}-${Date.now()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed top-4 right-4 z-50"
            >
                <div className={`${details.bgColor} ${details.borderColor} border shadow-lg rounded-lg p-4 max-w-md flex items-center gap-3 backdrop-blur-sm`}>
                    {details.icon}
                    <div>
                        <h4 className="font-medium text-white">{details.title}</h4>
                        {statusMessage && <p className="text-sm text-white/80">{statusMessage}</p>}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}