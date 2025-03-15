import { Suspense } from 'react'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HelpButton from '@/components/HelpButton'
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
    <html lang="en" className="overflow-hidden">
      <body className={`${garamond.variable} font-sans flex flex-col h-[100vh] bg-zinc-900 text-zinc-100`}>
        <Header />
        <main className="flex-grow flex flex-col overflow-auto mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <ProgressProvider gameKey='ds1'>
              {children}
            </ProgressProvider>
          </Suspense>
          <HelpButton />
        </main>
        <Footer />
      </body>
    </html>
  )
}