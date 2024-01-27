import { getTech } from "@/fetchers/tech/getTech"
import Image from "next/image"

export default async function TechstackPage() {
    const tech = await getTech()

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-screen flex flex-col items-center justify-center gap-8 max-[768px]:h-[400px] max-[768px]:p-8 max-[768px]:text-center">
                <Image className="object-cover" src="/TECHSTACK.png" alt="" width={1500} height={1000} />
                <p className="text-2xl text-white/70 font-mono max-[768px]:text-xl">Technologies I use to increase my productivity</p>
            </div>
            <div className='grid grid-cols-3 w-full gap-16 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1 min-h-screen max-[600px]:gap-0'>
                {tech.techstacks.map((tech) => (
                    <div key={tech.technologyTitle}
                        className="mt-32 p-[1px] bg-gradient-to-b h-[450px] from-[#FEFEFE]/30 to-[#8B96B1]/30 overflow-hidden rounded-[72px] flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:rounded-3xl">
                        <div className="bg-[#1b2031] w-full h-full relative flex flex-col items-center justify-start rounded-[72px] max-[768px]:rounded-3xl">
                            <div className="flex flex-col items-center gap-4 mt-8 px-4">
                                <div className="flex flex-col items-center text-center">
                                    <Image src={tech.technologyIcon?.url as any} width={100} height={100} alt="" />
                                    <h1 className="text-3xl font-mono">{tech.technologyTitle}</h1>
                                    <p className="font-mono text-lg text-white/70">{tech.technologyDescription}</p>
                                </div>
                                <div className="flex gap-2">
                                    {tech.label?.map((label) => (

                                        <p key={label}
                                            className={`text-sm text-white p-2 rounded-md border-[1px] uppercase font-mono max-[768px]:p-1 max-[768px]:text-xs z-[10]
                              ${label === 'design' ? 'bg-violet-300/40 border-violet-400' :
                                                    label === 'productivity' ? 'bg-green-300/40 border-green-400' :
                                                        label === 'music' ? 'bg-yellow-300/40 border-yellow-400' :
                                                            label === '3d' ? 'bg-red-300/40 border-red-400' :
                                                                label === 'photography' ? 'bg-blue-300/40 border-blue-400' :
                                                                    label === 'editing' ? 'bg-indigo-300/40 border-indigo-400' :
                                                                        label === 'coding' ? 'bg-pink-300/40 border-pink-400' :
                                                                            'bg-blue-200/10'}`
                                            }>
                                            {label}
                                        </p>
                                    ))}
                                </div>

                            </div>
                            <div className="absolute left-24 -bottom-72 w-full h-full">
                                <Image className="saturate-[85%]" src={tech.technologyImage?.url as string} width={2000} height={2000} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}