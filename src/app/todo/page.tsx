import { ScrollArea } from "@/components/ui/scroll-area";

export default function Todo() {
    return (
        <ScrollArea>
            <div>
                <div>
                    <h2 className="text-6xl mb-4">
                        Overall:
                    </h2>
                    <ul className="list-disc list-inside text-2xl">
                        <li>NPCs met / missions</li>
                        <li>Bonfire / lantern / archstone tracking</li>
                        <li>Popup to clarify when connected to Twitch</li>
                        <li>/commands squished page</li>
                        <li>add tools & multiplayer to EQ items for consumables</li>
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
                    </ul>
                </div>
                <div>
                    <h2 className="text-6xl my-4">
                        Elden Ring:
                    </h2>
                    <ul className="list-disc list-inside text-2xl">
                        <li>Handle all bosses (many minor ones)</li>
                        <li>Track Ashes of War</li>
                    </ul>
                </div>
            </div>
        </ScrollArea>
    );
};