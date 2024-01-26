import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { AnimatedParticles } from '@/components/AnimatedParticles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between max-w-[1400px] w-full m-auto px-8">
        {children}
        <Navbar />
        <Footer />
        <AnimatedParticles />
      </body>
    </html>
  )
}
