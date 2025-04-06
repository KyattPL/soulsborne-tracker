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
                        <li>add tools & multiplayer to EQ items for consumables</li>
                    </ul>
                </div>
            </div>
        </ScrollArea>
    );
};