import GameCard from '../components/GameCard';

// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const games = [
  {
    id: 'des',
    title: "Demon's Souls",
    subtitle: '2020 Playstation 5 Remake',
    path: '/des',
    image: '/soulsborne-tracker/images/des.jpg',
    description: 'Send The Old One back to its slumber.'
  },
  {
    id: 'ds1',
    title: 'Dark Souls',
    subtitle: 'Prepare to Die Edition',
    path: '/ds1',
    image: '/soulsborne-tracker/images/ds1.jpg',
    description: 'Begin your journey in Lordran, where the Undead curse spreads.'
  },
  {
    id: 'ds2',
    title: 'Dark Souls II',
    subtitle: 'Scholar of the First Sin',
    path: '/ds2',
    image: '/soulsborne-tracker/images/ds2.jpg',
    description: 'Venture to Drangleic and seek the cure for the undead curse.'
  },
  {
    id: 'bb',
    title: 'Bloodborne',
    subtitle: 'The Old Hunters',
    path: '/bb',
    image: '/soulsborne-tracker/images/bb.jpg',
    description: 'Hunt your nightmares in the gothic city of Yharnam.'
  },
  {
    id: 'ds3',
    title: 'Dark Souls III',
    subtitle: 'The Fire Fades Edition',
    path: '/ds3',
    image: '/soulsborne-tracker/images/ds3.jpg',
    description: 'Rise from your grave, Ashen One, and link the fire.'
  },
  {
    id: 'elden',
    title: 'Elden Ring',
    subtitle: 'Shadow of the Erdtree',
    path: '/elden',
    image: '/soulsborne-tracker/images/elden.jpg',
    description: 'Become the Elden Lord in the Lands Between.'
  },
]

export default function HomePage() {
  return (
    <div className="space-y-8 overflow-y-auto h-full w-full overflow-x-hidden">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome, Chosen Undead</h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Track your journey through the Soulsborne series. Mark defeated bosses, discovered items, and explored locations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}