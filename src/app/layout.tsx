import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { ProgressProvider } from '@/components/ProgressProvider';

const garamond = EB_Garamond({ subsets: ['latin'], weight: '400', variable: '--font-garamond' })

export const metadata: Metadata = {
  title: 'Soulsborne Tracker',
  description: 'Track your progress through the Soulsborne series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className={`${garamond.variable} font-sans flex flex-col h-[100vh] bg-zinc-900 text-zinc-100`}>
        <ProgressProvider gameKey='ds1'>
          <Header />
        </ProgressProvider>
        <main className="flex-grow h-[calc(100vh-8rem)] overflow-hidden container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}