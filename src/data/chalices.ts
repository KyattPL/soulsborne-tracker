export type ColorType = 'normal' | 'root' | 'sinister' | 'ritual';


type RegularChaliceName = "Pthumeru Labyrinth" | "Central Pthumeru" | "Lower Pthumeru" | "Hintertomb" | "Sinister Lower Pthumeru"
    | "Sinister Lower Hintertomb" | "Short Ritual Chalice" | "Defiled Pthumeru" | "Great Pthumeru Ihyll" | "Great Isz"
    | "Lower Hintertomb" | "Ailing Loran" | "Lower Ailing Loran";

// Ritual requirements data
const ritualRequirements = {
    "Pthumeru Labyrinth": {
        materials: ["Pthumeru Chalice", "Ritual Blood (1) x2"],
        note: "Blood Level 30+ recommended"
    },
    "Central Pthumeru": {
        materials: ["Central Pthumeru Chalice", "Ritual Blood (2) x4"],
        note: "Blood Level 50+ recommended"
    },
    "Lower Pthumeru": {
        materials: ["Lower Pthumeru Chalice", "Ritual Blood (3) x5", "Arcane Haze x7"],
        note: "Blood Level 70+ recommended"
    },
    "Hintertomb": {
        materials: ["Hintertomb Chalice", "Ritual Blood (2) x4", "Tomb Mold (1) x3"],
        note: "Blood Level 60+ recommended"
    },
    "Lower Hintertomb": {
        materials: ["Lower Hintertomb Chalice", "Ritual Blood (3) x5", "Tomb Mold (2) x4", "Arcane Haze x7"],
        note: "Blood Level 80+ recommended"
    },
    "Sinister Lower Pthumeru": {
        materials: ["Sinister Lower Pthumeru Chalice", "Ritual Blood (3) x5", "Yellow Backbone x2", "Arcane Haze x7"],
        note: "Blood Level 70+ recommended"
    },
    "Sinister Lower Hintertomb": {
        materials: ["Sinister Lower Hintertomb Chalice", "Ritual Blood (3) x5", "Yellow Backbone x2", "Tomb Mold (2) x4", "Arcane Haze x7"],
        note: "Blood Level 80+ recommended"
    },
    "Short Ritual Chalice": {
        materials: ["Short Ritual Root Chalice", "Ritual Blood (5) x2", "Bastard of Loran x2"],
        note: "Allows co-op in any chalice dungeon"
    },
    "Defiled Pthumeru": {
        materials: ["Defiled Chalice", "Ritual Blood (4) x9", "Bastard of Loran x3", "Arcane Haze x11"],
        note: "Blood Level 100+ recommended. Half HP penalty"
    },
    "Ailing Loran": {
        materials: ["Ailing Loran Chalice", "Ritual Blood (4) x9", "Tomb Mold (3) x6", "Arcane Haze x11"],
        note: "Blood Level 90+ recommended"
    },
    "Great Pthumeru Ihyll": {
        materials: ["Great Pthumeru Ihyll Chalice", "Ritual Blood (5) x9", "Red Jelly x4", "Living String x1", "Arcane Haze x16"],
        note: "Blood Level 120+ recommended"
    },
    "Lower Ailing Loran": {
        materials: ["Lower Ailing Loran Chalice", "Ritual Blood (5) x9", "Tomb Mold (4) x6", "Bastard of Loran x4", "Arcane Haze x16"],
        note: "Blood Level 110+ recommended"
    },
    "Great Isz": {
        materials: ["Great Isz Chalice", "Ritual Blood (5) x9", "Pearl Slug x5", "Arcane Haze x16"],
        note: "Blood Level 110+ recommended"
    },
};

type RootChaliceName = "Pthumeru Root Labyrinth" | "Central Pthumeru Root" | "Lower Pthumeru Root" | "Hintertomb Root" | "Isz Root"
    | "Lower Hintertomb Root" | "Cursed and Defiled Pthumeru Root" | "Ailing Loran Root" | "Pthumeru Ihyll Root" | "Lower Ailing Loran Root"
    | "Sinister Pthumeru Ihyll Root" | "Sinister Lower Loran Root" | "Sinister Isz Root";

// Root chalices with special notes
const rootChalices = {
    "Pthumeru Root Labyrinth": {
        materials: ["Pthumeru Root Chalice", "Ritual Blood (1) x2"],
        note: "Randomized layout of Pthumeru"
    },
    "Central Pthumeru Root": {
        materials: ["Central Pthumeru Root Chalice", "Ritual Blood (2) x4", "Arcane Haze x3"],
        note: "Randomized layout of Pthumeru"
    },
    "Lower Pthumeru Root": {
        materials: ["Lower Pthumeru Root Chalice", "Ritual Blood (3) x5", "Arcane Haze x7"],
        note: "Randomized layout of Pthumeru"
    },
    "Hintertomb Root": {
        materials: ["Hintertomb Root Chalice", "Ritual Blood (2) x4", "Tomb Mold (1) x3", "Arcane Haze x3"],
        note: "Randomized layout of Hintertomb"
    },
    "Lower Hintertomb Root": {
        materials: ["Lower Hintertomb Root Chalice", "Ritual Blood (3) x5", "Tomb Mold (2) x4", "Arcane Haze x7"],
        note: "Randomized layout of Hintertomb"
    },
    "Cursed and Defiled Pthumeru Root": {
        materials: ["Cursed and Defiled Root Chalice", "Ritual Blood (4) x9", "Bastard of Loran x3", "Arcane Haze x11"],
        note: "Randomized layout of Pthumeru with half HP penalty"
    },
    "Ailing Loran Root": {
        materials: ["Ailing Loran Root Chalice", "Ritual Blood (4) x9", "Tomb Mold (3) x6", "Arcane Haze x11"],
        note: "Randomized layout of Loran"
    },
    "Pthumeru Ihyll Root": {
        materials: ["Pthumeru Ihyll Root Chalice", "Ritual Blood (5) x9", "Red Jelly x4", "Arcane Haze x16"],
        note: "Randomized layout of Pthumeru"
    },
    "Lower Ailing Loran Root": {
        materials: ["Lower Ailing Loran Root Chalice", "Ritual Blood (5) x9", "Tomb Mold (4) x6", "Bastard of Loran x4", "Arcane Haze x16"],
        note: "Randomized layout of Loran"
    },
    "Isz Root": {
        materials: ["Isz Root Chalice", "Ritual Blood (5) x9", "Pearl Slug x5", "Arcane Haze x16"],
        note: "Randomized layout of Isz"
    },
    "Sinister Pthumeru Ihyll Root": {
        materials: ["Sinister Pthumeru Ihyll Root Chalice", "Ritual Blood (5) x9", "Red Jelly x4", "Yellow Backbone x3", "Arcane Haze x16"],
        note: "Randomized layout of Pthumeru"
    },
    "Sinister Lower Loran Root": {
        materials: ["Sinister Lower Loran Root Chalice", "Ritual Blood (5) x9", "Yellow Backbone x3", "Tomb Mold (4) x6", "Arcane Haze x16"],
        note: "Randomized layout of Loran"
    },
    "Sinister Isz Root": {
        materials: ["Sinister Isz Root Chalice", "Ritual Blood (5) x9", "Yellow Backbone x3", "Pearl Slug x5", "Arcane Haze x16"],
        note: "Randomized layout of Isz"
    }
};

// Combine all ritual requirements
export const allRequirements = { ...ritualRequirements, ...rootChalices };
export type TChaliceName = RootChaliceName | RegularChaliceName;

export const CHALICE_NAMES = ["Pthumeru Labyrinth", "Central Pthumeru", "Lower Pthumeru", "Hintertomb", "Sinister Lower Pthumeru"
    , "Sinister Lower Hintertomb", "Short Ritual Chalice", "Defiled Pthumeru", "Great Pthumeru Ihyll", "Great Isz"
    , "Lower Hintertomb", "Ailing Loran", "Lower Ailing Loran", "Pthumeru Root Labyrinth", "Central Pthumeru Root", "Lower Pthumeru Root", "Hintertomb Root", "Isz Root"
    , "Lower Hintertomb Root", "Cursed and Defiled Pthumeru Root", "Ailing Loran Root", "Pthumeru Ihyll Root", "Lower Ailing Loran Root"
    , "Sinister Pthumeru Ihyll Root", "Sinister Lower Loran Root", "Sinister Isz Root"];