'use client';
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const navigationItems = [
    { name: "Demon's Souls", href: '/des' },
    { name: 'Dark Souls', href: '/ds1' },
    { name: 'Dark Souls II', href: '/ds2' },
    { name: 'Bloodborne', href: '/bb' },
    { name: 'Dark Souls III', href: '/ds3' },
    { name: 'Elden Ring', href: '/elden' }
    // { name: 'Sekiro', href: '/sekiro' }
];

export default function Header() {
    return (
        <header className="bg-zinc-800 border-b border-zinc-700 h-16">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/soulsborne-tracker/images/tracker-logo.png" alt="Soulsborne tracker logo" height={64} width={64} />
                            <span className="text-xl font-bold">Soulsborne Tracker</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}