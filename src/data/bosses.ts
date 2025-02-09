export interface Boss {
    id: string;
    name: string;
    location: string;
}

export const bosses: Record<string, Boss[]> = {
    "ds1": [
        { "id": "asylum-demon", "name": "Asylum Demon", "location": "Undead Asylum" },
        { "id": "bed-of-chaos", "name": "Bed of Chaos", "location": "Lost Izalith" },
        { "id": "bell-gargoyles", "name": "Bell Gargoyles", "location": "Undead Parish" },
        { "id": "black-dragon-kalameet", "name": "Black Dragon Kalameet", "location": "Royal Wood" },
        { "id": "capra-demon", "name": "Capra Demon", "location": "Lower Undead Burg" },
        { "id": "ceaseless-discharge", "name": "Ceaseless Discharge", "location": "Demon Ruins" },
        { "id": "centipede-demon", "name": "Centipede Demon", "location": "Demon Ruins" },
        { "id": "chaos-witch-quelaag", "name": "Chaos Witch Quelaag", "location": "Blighttown" },
        { "id": "crossbreed-priscilla", "name": "Crossbreed Priscilla", "location": "Painted World of Ariamis" },
        { "id": "dark-sun-gwyndolin", "name": "Dark Sun Gwyndolin", "location": "Anor Londo" },
        { "id": "demon-firesage", "name": "Demon Firesage", "location": "Demon Ruins" },
        { "id": "dragon-slayer-ornstein-executioner-smough", "name": "Ornstein & Smough", "location": "Anor Londo" },
        { "id": "four-kings", "name": "Four Kings", "location": "The Abyss" },
        { "id": "gaping-dragon", "name": "Gaping Dragon", "location": "Depths" },
        { "id": "gravelord-nito", "name": "Gravelord Nito", "location": "Tomb of the Giants" },
        { "id": "gwyn-lord-of-cinder", "name": "Gwyn, Lord of Cinder", "location": "Kiln of the First Flame" },
        { "id": "iron-golem", "name": "Iron Golem", "location": "Sen's Fortress" },
        { "id": "knight-artorias", "name": "Knight Artorias", "location": "Royal Wood" },
        { "id": "manus-father-of-the-abyss", "name": "Manus, Father of the Abyss", "location": "Chasm of the Abyss" },
        { "id": "moonlight-butterfly", "name": "Moonlight Butterfly", "location": "Darkroot Garden" },
        { "id": "pinwheel", "name": "Pinwheel", "location": "The Catacombs" },
        { "id": "sanctuary-guardian", "name": "Sanctuary Guardian", "location": "Sanctuary Garden" },
        { "id": "seath-the-scaleless", "name": "Seath the Scaleless", "location": "The Duke's Archives Crystal Cave" },
        { "id": "sif-the-great-grey-wolf", "name": "Sif, the Great Grey Wolf", "location": "Darkroot Garden" },
        { "id": "stray-demon", "name": "Stray Demon", "location": "Undead Asylum (Revisited)" },
        { "id": "taurus-demon", "name": "Taurus Demon", "location": "Undead Burg" }
    ],
    "ds2": [
        {
            "id": "1",
            "name": "The Last Giant",
            "location": "Forest of Fallen Giants"
        },
        {
            "id": "2",
            "name": "The Pursuer",
            "location": "Forest of Fallen Giants"
        },
        {
            "id": "3",
            "name": "Dragonrider",
            "location": "Heide's Tower of Flame"
        },
        {
            "id": "4",
            "name": "Old Dragonslayer",
            "location": "Cathedral of Blue"
        },
        {
            "id": "5",
            "name": "Flexile Sentry",
            "location": "No-man's Wharf"
        },
        {
            "id": "6",
            "name": "Ruin Sentinels",
            "location": "The Lost Bastille"
        },
        {
            "id": "7",
            "name": "The Lost Sinner",
            "location": "Sinner's Rise"
        },
        {
            "id": "8",
            "name": "Belfry Gargoyles",
            "location": "Belfry Luna"
        },
        {
            "id": "9",
            "name": "Skeleton Lords",
            "location": "Huntsman's Copse"
        },
        {
            "id": "10",
            "name": "Executioner's Chariot",
            "location": "Undead Purgatory"
        },
        {
            "id": "11",
            "name": "Covetous Demon",
            "location": "Earthen Peak"
        },
        {
            "id": "12",
            "name": "Mytha, the Baneful Queen",
            "location": "Earthen Peak"
        },
        {
            "id": "13",
            "name": "Smelter Demon",
            "location": "Iron Keep"
        },
        {
            "id": "14",
            "name": "Old Iron King",
            "location": "Iron Keep"
        },
        {
            "id": "15",
            "name": "Scorpioness Najka",
            "location": "Shaded Woods"
        },
        {
            "id": "16",
            "name": "Royal Rat Authority",
            "location": "Doors of Pharros"
        },
        {
            "id": "17",
            "name": "Prowling Magus & Congregation",
            "location": "Brightstone Cove Tseldora"
        },
        {
            "id": "18",
            "name": "The Duke's Dear Freja",
            "location": "Brightstone Cove Tseldora"
        },
        {
            "id": "19",
            "name": "Royal Rat Vanguard",
            "location": "Grave of Saints"
        },
        {
            "id": "20",
            "name": "The Rotten",
            "location": "Black Gulch"
        },
        {
            "id": "21",
            "name": "Dragonriders",
            "location": "Drangleic Castle"
        },
        {
            "id": "22",
            "name": "Looking Glass Knight",
            "location": "King's Passage"
        },
        {
            "id": "23",
            "name": "Demon of Song",
            "location": "Shrine of Amana"
        },
        {
            "id": "24",
            "name": "Velstadt, the Royal Aegis",
            "location": "Undead Crypt"
        },
        {
            "id": "25",
            "name": "Vendrick",
            "location": "Undead Crypt"
        },
        {
            "id": "26",
            "name": "Guardian Dragon",
            "location": "Aldia's Keep"
        },
        {
            "id": "27",
            "name": "Ancient Dragon",
            "location": "Dragon Shrine"
        },
        {
            "id": "28",
            "name": "Giant Lord",
            "location": "Memory of Jeigh"
        },
        {
            "id": "29",
            "name": "Throne Defender & Throne Watcher",
            "location": "Throne of Want"
        },
        {
            "id": "30",
            "name": "Nashandra",
            "location": "Throne of Want"
        },
        {
            "id": "31",
            "name": "Aldia, Scholar of the First Sin",
            "location": "Throne of Want"
        },
        {
            "id": "32",
            "name": "Darklurker",
            "location": "Dark Chasm of Old"
        },
        {
            "id": "33",
            "name": "Elana, the Squalid Queen",
            "location": "Dragon's Rest"
        },
        {
            "id": "34",
            "name": "Sinh, the Slumbering Dragon",
            "location": "Dragon's Rest"
        },
        {
            "id": "35",
            "name": "Afflicted Graverobber, Ancient Soldier Varg & Cerah the Old Explorer",
            "location": "Cave of the Dead"
        },
        {
            "id": "36",
            "name": "Fume Knight",
            "location": "Brume Tower"
        },
        {
            "id": "37",
            "name": "Sir Alonne",
            "location": "Memory of the Old Iron King"
        },
        {
            "id": "38",
            "name": "Smelter Demon (Iron King DLC)",
            "location": "Iron Passage"
        },
        {
            "id": "39",
            "name": "Aava, the King's Pet",
            "location": "Frozen Eleum Loyce"
        },
        {
            "id": "40",
            "name": "Burnt Ivory King",
            "location": "The Old Chaos"
        },
        {
            "id": "41",
            "name": "Lud, the King's Pet & Zallen, the King's Pet",
            "location": "Frigid Outskirts"
        }
    ],
    "ds3": [
        {
            "id": "1",
            "name": "Iudex Gundyr",
            "location": "Cemetery of Ash"
        },
        {
            "id": "2",
            "name": "Vordt of the Boreal Valley",
            "location": "High Wall of Lothric"
        },
        {
            "id": "3",
            "name": "Curse-rotted Greatwood",
            "location": "Undead Settlement"
        },
        {
            "id": "4",
            "name": "Crystal Sage",
            "location": "Road of Sacrifices"
        },
        {
            "id": "5",
            "name": "Deacons of the Deep",
            "location": "Cathedral of the Deep"
        },
        {
            "id": "6",
            "name": "Abyss Watchers",
            "location": "Farron Keep"
        },
        {
            "id": "7",
            "name": "High Lord Wolnir",
            "location": "Catacombs of Carthus"
        },
        {
            "id": "8",
            "name": "Old Demon King",
            "location": "Smouldering Lake"
        },
        {
            "id": "9",
            "name": "Pontiff Sulyvahn",
            "location": "Irithyll of the Boreal Valley"
        },
        {
            "id": "10",
            "name": "Aldrich, Devourer of Gods",
            "location": "Anor Londo"
        },
        {
            "id": "11",
            "name": "Yhorm the Giant",
            "location": "Profaned Capital"
        },
        {
            "id": "12",
            "name": "Dancer of the Boreal Valley",
            "location": "High Wall of Lothric"
        },
        {
            "id": "13",
            "name": "Oceiros, the Consumed King",
            "location": "Consumed King's Garden"
        },
        {
            "id": "14",
            "name": "Champion Gundyr",
            "location": "Untended Graves"
        },
        {
            "id": "15",
            "name": "Ancient Wyvern",
            "location": "Archdragon Peak"
        },
        {
            "id": "16",
            "name": "The Nameless King",
            "location": "Archdragon Peak"
        },
        {
            "id": "17",
            "name": "Dragonslayer Armour",
            "location": "Lothric Castle"
        },
        {
            "id": "18",
            "name": "The Twin Princes",
            "location": "Grand Archives"
        },
        {
            "id": "19",
            "name": "Soul of Cinder",
            "location": "Kiln of the First Flame"
        },
        {
            "id": "20",
            "name": "Sister Friede",
            "location": "Painted World of Ariandel"
        },
        {
            "id": "21",
            "name": "Champion's Gravetender & Gravetender Greatwolf",
            "location": "Painted World of Ariandel"
        },
        {
            "id": "22",
            "name": "The Demon Prince",
            "location": "The Dreg Heap"
        },
        {
            "id": "23",
            "name": "Darkeater Midir",
            "location": "The Ringed City"
        },
        {
            "id": "24",
            "name": "Halflight, Spear of the Church",
            "location": "The Ringed City"
        },
        {
            "id": "25",
            "name": "Slave Knight Gael",
            "location": "The Ringed City"
        }
    ]
};