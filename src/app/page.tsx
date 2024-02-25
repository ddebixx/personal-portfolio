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

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <div className='min-h-screen grid grid-cols-3 grid-rows-4 w-full gap-16 max-[1024px]:grid-cols-2 max-[1024px]:grid-rows-6 max-[600px]:grid-cols-1 max-[600px]:grid-rows-10 max-[768px]:gap-8 max-[768px]:mt-32'>
        <LocationCard className='flex flex-col items-center justify-center row-span-2 col-span-1 hover:scale-105 transition max-[768px]:rounded-sm max-[768px]:min-h-[280px] max-[500px]:row-span-1' />
        <ProjectsCard className='flex flex-col items-center justify-center col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:min-h-[280px]' />
        <AboutMeCard className='flex flex-col items-center justify-center col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:min-h-[280px]' />
        <TechstackCard className='flex flex-col items-center justify-center col-span-1 border-white/20 min-h-[320px] overflow-hidden hover:scale-105 max-[768px]:min-h-[280px] transition' />
        <VisitedPlace className='flex flex-col items-start col-span-1 w-full relative border-white/20 hover:scale-105 transition max-[768px]:min-h-[280px]' />
        <FoundationCard className='flex flex-col items-center justify-center col-span-2 border-white/20 max-[600px]:col-span-1 hover:scale-105 transition max-[768px]:row-span-2 max-[768px]:min-h-[280px]' />
        <ContactCard className='flex flex-col items-center justify-center col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:min-h-[280px]' />
        <SocialCard className='flex flex-col items-center justify-center col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:min-h-[280px]' />
        <GithubCard className='flex flex-col items-center justify-center col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:min-h-[280px]' />
        <BooksCard className='flex flex-col items-center justify-center col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:min-h-[280px]' />
      </div>
    </main>
  )
}
