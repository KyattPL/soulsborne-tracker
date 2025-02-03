'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface GameCardProps {
    game: {
        id: string
        title: string
        subtitle: string
        path: string
        image: string
        description: string
    }
}

export default function GameCard({ game }: GameCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={game.path}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card className="overflow-hidden bg-zinc-800 border-zinc-700 h-full transition-colors hover:border-orange-500/50">
                    <CardContent className="p-0">
                        <div className="aspect-video relative">
                            {/* Game image */}
                            {/* <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: game.image }}
                            /> */}

                            <Image src={game.image} alt={game.description} width="1080" height="720" />

                            {/* Gradient overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent
                  transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}
                            />

                            {/* Content overlay */}
                            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-slate-900 bg-opacity-30">
                                <h2 className="text-2xl text-zinc-100 font-bold">{game.title}</h2>
                                <p className="text text-orange-400">{game.subtitle}</p>
                                <p className={` text-zinc-300 mt-2 transition-opacity duration-300
                  ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                                    {game.description}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </Link>
    )
}