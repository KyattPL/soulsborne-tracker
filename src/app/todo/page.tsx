import { ScrollArea } from "@/components/ui/scroll-area";

export default function Todo() {
    return (
        <ScrollArea>
            <div>
                <div>
                    <h2 className="text-6xl mb-4">
                        Elden Ring:
                    </h2>
                    <ul className="list-disc list-inside text-2xl">
                        <li>Maybe add physic flask mix & great rune</li>
                    </ul>
                </div>
            </div>
        </ScrollArea>
    );
};