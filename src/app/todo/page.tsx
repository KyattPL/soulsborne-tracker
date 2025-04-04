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
                        <li>add tools & multiplayer to EQ items for consumables</li>
                        <li>add commands for EQ / tendency / blood gems / chalice dungeons</li>
                    </ul>
                </div>
            </div>
        </ScrollArea>
    );
};