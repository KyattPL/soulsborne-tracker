export default function Todo() {
    return (
        <div>
            <div>
                <h2 className="text-6xl mb-4">
                    Overall:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>Covenants ? (which one is active)</li>
                    <li>Gathered items (A LOT of work for that, that includes spells/weapons/rings/items etc.)</li>
                    <li>NPCs met / missions</li>
                    <li>Bonfire / lantern / archstone tracking</li>
                    <li>Worn rings</li>
                    <li>Twitch commands guide</li>
                    <li>Twitch command to get the shareable link</li>
                </ul>
            </div>
            <div>
                <h2 className="text-6xl my-4">
                    Demon&apos;s Souls:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>World tendency</li>
                    <li>Character tendency (maybe displayed prettier idk)</li>
                </ul>
            </div>
            <div>
                <h2 className="text-6xl my-4">
                    Bloodborne:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>Handle chalice dungeons</li>
                    <li>Track blood gems</li>
                    <li>Caryll runes (similar to rings in souls)</li>
                </ul>
            </div>
            <div>
                <h2 className="text-6xl my-4">
                    Elden Ring:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>Handle all bosses (many minor ones)</li>
                    <li>Track Ashes of War</li>
                    <li>EASY: add maxSpiritAshUpgrade (works just like weapons upgrades up to +10)</li>
                </ul>
            </div>
        </div>
    );
};