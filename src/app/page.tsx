import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const games = [
    { id: "ds1", name: "Dark Souls 1", image: "/images/ds1.jpg" },
    { id: "ds2", name: "Dark Souls 2", image: "/images/ds2.jpg" },
    { id: "ds3", name: "Dark Souls 3", image: "/images/ds3.jpg" },
    { id: "bb", name: "Bloodborne", image: "/images/bb.jpg" },
    { id: "er", name: "Elden Ring", image: "/images/er.jpg" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <Link key={game.id} href={`/${game.id}`}>
            <Card className="relative overflow-hidden rounded-xl cursor-pointer">
              <Image src={game.image} alt={game.name} className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition" />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center py-2">
                {game.name}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}