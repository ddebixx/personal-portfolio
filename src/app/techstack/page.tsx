import { getTech } from "@/fetchers/tech/getTech"
import Image from "next/image"

export default async function TechstackPage() {

    const tech = await getTech()

    return (
        <div className='grid grid-cols-3 w-full gap-16 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1 min-h-screen mt-32'>
            {tech.techstacks.map((tech) => (
                <div className="mt-32 p-[1px] bg-gradient-to-b h-[450px] from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] overflow-hidden flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition">
                    <div className="bg-[#1b2031] w-full h-full relative rounded-[72px] flex flex-col items-center justify-start">
                        <div className="flex flex-col items-center gap-4 mt-8">
                            <div className="flex flex-col items-center text-center">
                                <Image src={tech.technologyIcon?.url as any} width={100} height={100} alt="" />
                                <h1 className="text-3xl font-mono">{tech.technologyTitle}</h1>
                                <p className="font-mono text-lg text-white/70">{tech.technologyDescription}</p>
                            </div>
                            {tech.label?.map((label) => (
                                <p
                                    className={`text-sm text-white p-2 rounded-md border-[1px] uppercase font-mono 
        ${label === 'design' ? 'bg-violet-300/40 border-violet-400' : 'bg-blue-200/10'}`}
                                >
                                    {label}
                                </p>
                            ))}
                        </div>
                        <div className="absolute left-24 -bottom-72 w-full h-full">
                            <Image className="saturate-[85%]" src={tech.technologyImage?.url as string} width={2000} height={2000} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}