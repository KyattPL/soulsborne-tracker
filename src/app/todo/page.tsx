export default function Todo() {
    return (
        <div>
            <div>
                <h2 className="text-6xl mb-4">
                    Overall:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>More game-specific trackers like Ashes of War, Blood gems etc.</li>
                    <li>Twitch better commands</li>
                    <li>Maybe change default progress stats</li>
                </ul>
            </div>
            <div>
                <h2 className="text-6xl my-4">
                    Bloodborne:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>Handle chalice dungeons</li>
                </ul>
            </div>
            <div>
                <h2 className="text-6xl my-4">
                    Elden Ring:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>Handle all bosses (many minor ones)</li>
                </ul>
            </div>
        </div>
    );
};