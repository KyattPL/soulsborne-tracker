Project: Soulsborne Tracker

Tech Stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN
- localStorage (for progress saving)

Project Structure:
/src
  /app
    /page.tsx  → Main Game Selection
    /ds1
      /page.tsx  → Dark Souls 1 Dashboard
  /components
    /GameTile.tsx  → Game selection tiles
    /BossList.tsx  → Checklist for bosses
    /Map.tsx  → Pre-rendered map with markers
    /MarkerPopup.tsx  → Popups for map markers
  /data
    bosses.json  → List of Dark Souls 1 bosses
    mapMarkers.json  → Marker positions for DS1 map
  /styles
    globals.css  → Tailwind base styles
  /utils
    localStorageUtils.ts  → Helpers for saving/loading progress

Layout:
1. **Main Page (Game Selection) (/)**
   - Displays a grid of game tiles (DS1, DS2, DS3, BB, ER)
   - Clicking a game leads to its respective dashboard
   - Uses Tailwind and Framer Motion for smooth transitions

2. **Dark Souls 1 Dashboard (/ds1)**
   - Contains a 2-column layout:
     - **Left:** Boss Checklist (simple checkmark system for defeated bosses)
     - **Right:** Pre-rendered **interactive map** with bosses/items/location markers
     - **Below Center:** Tracker of collected items/locations/random things
   - Clickable **map markers** of appropriate color reveal popups with names of location/item/random things
   - All progress is **saved in localStorage**

3. **Boss Checklist Component**
   - Loads boss list from `bosses.json`
   - Checkboxes to mark bosses as defeated
   - Data persists using localStorage

4. **Map Component**
   - Uses a pre-rendered **static image** of Lordran
   - Overlays **interactive markers** based on `mapMarkers.json`
   - Clicking a marker opens a **popup with boss/location name**
   - Toggle filters (e.g., show only bosses, bonfires, or key items)

Additional Features:
- **Dark, gothic UI** with embers effect for immersion
- **Framer Motion animations** for smooth interactions
- **ShadCN components** for a modern, clean design
- **Expandable for future Soulsborne games** (DS2, DS3, BB, ER)