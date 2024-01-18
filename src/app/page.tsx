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
      <div className='min-h-screen grid grid-cols-3 grid-rows-4 w-full gap-16 max-[1024px]:grid-cols-2 max-[1024px]:grid-rows-6 max-[600px]:grid-cols-1 max-[600px]:grid-rows-10'>
        <LocationCard className='flex flex-col items-center justify-center gap-4 row-span-2 col-span-1 rounded-[72px] max-[600px]:row-span-1 hover:scale-105 transition' />
        <ProjectsCard className='flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition' />
        <AboutMeCard className='flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition' />
        <TechstackCard className='flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] overflow-hidden hover:scale-105 transition' />
        <VisitedPlace className='flex flex-col items-start col-span-1 overflow-hidden w-full relative rounded-[72px] border-white/20 hover:scale-105 transition' />
        <FoundationCard className='flex flex-col items-center justify-center gap-4 col-span-2 rounded-[72px] border-white/20 max-[600px]:col-span-1 hover:scale-105 transition' />
        <ContactCard className='flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition' />
        <SocialCard className='flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition' />
        <GithubCard className='flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition' />
        <BooksCard className='flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition' />
      </div>
    </main>
  )
}
