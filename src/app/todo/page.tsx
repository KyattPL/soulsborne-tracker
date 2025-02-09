export default function Todo() {
    return (
        <div>
            <div>
                <h2 className="text-6xl mb-4">
                    Overall:
                </h2>
                <ul className="list-disc list-inside text-2xl">
                    <li>Handle maps for all games (DS1, DS2, DS3, BB, ELDEN)</li>
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
        </div>
    );
};