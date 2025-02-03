// Type definitions
export interface Boss {
    id: string;
    name: string;
    location: string;
    optional: boolean;
}

export interface Marker {
    id: string;
    type: 'boss' | 'bonfire' | 'item';
    x: number;
    y: number;
    name: string;
    description?: string;
}

// Progress types
export type BossProgress = string[]; // Array of defeated boss IDs
export type MarkerProgress = string[]; // Array of discovered marker IDs

const STORAGE_PREFIX = 'soulsborne-tracker';

// Generic save function
export function saveProgress<T>(key: string, data: T): void {
    try {
        const storageKey = `${STORAGE_PREFIX}-${key}`;
        localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving progress:', error);
    }
}

// Generic load function with type checking
export function loadProgress<T>(key: string, validator: (data: unknown) => data is T): T | null {
    try {
        const storageKey = `${STORAGE_PREFIX}-${key}`;
        const data = localStorage.getItem(storageKey);
        if (!data) return null;

        const parsedData = JSON.parse(data);
        return validator(parsedData) ? parsedData : null;
    } catch (error) {
        console.error('Error loading progress:', error);
        return null;
    }
}

// Type guard for Boss array
export function isBossProgress(data: unknown): data is BossProgress {
    return Array.isArray(data) && data.every(id => typeof id === 'string');
}

// Type guard for Marker array
export function isMarkerProgress(data: unknown): data is MarkerProgress {
    return Array.isArray(data) && data.every(id => typeof id === 'string');
}

// Convenience functions for specific types
export function saveBossProgress(data: BossProgress): void {
    saveProgress<BossProgress>('ds1-bosses', data);
}

export function loadBossProgress(): BossProgress | null {
    return loadProgress<BossProgress>('ds1-bosses', isBossProgress);
}

export function saveMarkerProgress(data: MarkerProgress): void {
    saveProgress<MarkerProgress>('ds1-markers', data);
}

export function loadMarkerProgress(): MarkerProgress | null {
    return loadProgress<MarkerProgress>('ds1-markers', isMarkerProgress);
}

export function clearProgress(key: string): void {
    try {
        const storageKey = `${STORAGE_PREFIX}-${key}`;
        localStorage.removeItem(storageKey);
    } catch (error) {
        console.error('Error clearing progress:', error);
    }
}

export function clearAllProgress(): void {
    try {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(STORAGE_PREFIX)) {
                localStorage.removeItem(key);
            }
        });
    } catch (error) {
        console.error('Error clearing all progress:', error);
    }
}

export function getProgressKeys(): string[] {
    try {
        return Object.keys(localStorage)
            .filter(key => key.startsWith(STORAGE_PREFIX))
            .map(key => key.replace(`${STORAGE_PREFIX}-`, ''));
    } catch (error) {
        console.error('Error getting progress keys:', error);
        return [];
    }
}

// Helper to check if localStorage is available
export function isStorageAvailable(): boolean {
    try {
        const testKey = `${STORAGE_PREFIX}-test`;
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}