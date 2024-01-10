import { AboutMeCard } from '@/components/AboutMeCard'
import { BooksCard } from '@/components/BooksCard'
import { ContactCard } from '@/components/ContactCard'
import { FoundationCard } from '@/components/FoundationCard'
import { GithubCard } from '@/components/GithubCard'
import { HeroSection } from '@/components/HeroSection'
import { LocationCard } from '@/components/LocationCard'
import { ProjectsCard } from '@/components/ProjectsCard'
import { SocialCard } from '@/components/SocialCard'
import { TechstackCard } from '@/components/TechstackCard'
import { VisitedPlace } from '@/components/VisitedPlace'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <div className='min-h-screen grid grid-cols-3 grid-rows-4 w-full gap-16'>
        <LocationCard className='flex flex-col items-center justify-center gap-4 p-4 border-[1px] border-white/20 row-span-2 col-span-1 rounded-3xl' />
        <ProjectsCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-1 rounded-3xl border-[1px] border-white/20 min-h-[320px]' />
        <AboutMeCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-1 rounded-3xl border-[1px] border-white/20' />
        <TechstackCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-1 rounded-3xl border-[1px] border-white/20' />
        <VisitedPlace className='flex flex-col items-start col-span-1 overflow-hidden w-full relative rounded-3xl border-[1px] border-white/20' />
        <FoundationCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-2 rounded-3xl border-[1px] border-white/20' />
        <ContactCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-1 rounded-3xl border-[1px] border-white/20' />
        <SocialCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-1 rounded-3xl border-[1px] border-white/20' />
        <GithubCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-1 rounded-3xl border-[1px] border-white/20' />
        <BooksCard className='flex flex-col items-center justify-center gap-4 p-4 col-span-1 rounded-3xl border-[1px] border-white/20' />
      </div>
    </main>
  )
}
