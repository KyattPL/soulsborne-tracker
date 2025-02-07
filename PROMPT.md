Project: Soulsborne Tracker

Tech Stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN
- localStorage + Supabase (for progress saving)

Project Structure:
/src
  /auth
    /callback
      /route.ts -> Handle Supabase auth request
  /app
    /layout.tsx -> Layout with ProgressProvider
    /page.tsx  → Main Game Selection
    /ds1
      /page.tsx  → Dark Souls 1 Dashboard
  /components
    /layout
      /Header.tsx
      /Footer.tsx
    /BossList.tsx  → Checklist for bosses
    /CharacterStats.tsx
    /CustomTrackers.tsx
    /Map.tsx  → Pre-rendered map with markers
    /ProgressProvider.tsx -> Context provider of progress data and login status
  /lib -> Supabase server/client connection
  /data
    bosses.json  → List of Dark Souls 1 bosses
    mapMarkers.json  → Marker positions for DS1 map
  /utils
    localStorageUtils.ts  → Helpers for saving/loading progress
    middleware.ts -> Supabase middleware

Layout:
1. **Main Page (Game Selection) (/)**
   - Displays a grid of game tiles (DS1, DS2, DS3, BB, ER)
   - Clicking a game leads to its respective dashboard
   - Uses Tailwind and Framer Motion for smooth transitions

2. **Dark Souls 1 Dashboard (/ds1)**
   - Contains a 3-column layout:
     - **Left:** Character and player statistics
     - **Middle:** Boss Checklist (simple checkmark system for defeated bosses) + Custom trackers below
     - **Right:** Pre-rendered **interactive map** with bosses/items/location markers
   - Clickable **map markers** of appropriate color reveal popups with names of location/item/random things
   - All progress is **saved in localStorage** or in Supabase (if signed in with Twitch)

3. **Boss Checklist Component**
   - Loads boss list from `bosses.json`
   - Checkboxes to mark bosses as defeated
   - Data persists using localStorage

4. **Map Component**
   - Uses a pre-rendered **static image** of Lordran
   - Overlays **interactive markers** based on `mapMarkers.json`
   - Clicking a marker opens a **popup with boss/location name**
   - Toggle filters (e.g., show only bosses, bonfires, or key items)