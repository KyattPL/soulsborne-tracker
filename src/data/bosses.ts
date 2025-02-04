export interface Boss {
    id: string;
    name: string;
    location: string;
}

export const bosses: Boss[] = [
    {
        id: 'gargoyles',
        name: 'Bell Gargoyles',
        location: 'Undead Parish',
    },
    {
        id: 'ornstein-smough',
        name: 'Ornstein and Smough',
        location: 'Anor Londo',
    }
];