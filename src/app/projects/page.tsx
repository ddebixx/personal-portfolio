import { getProjects } from "@/fetchers/projects/getProjects"
import Image from "next/image"
import Link from "next/link"

export default async function ProjectsPage() {

    const projects = await getProjects()

    return (
        <>
            <div className='grid grid-cols-3 w-full gap-16 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1 min-h-screen mt-32'>
                {projects.projects.map((project) => (
                    <div className='flex flex-col items-center justify-center gap-4 row-span-1 border-white/20 hover:scale-105 transition h-[320px]'>
                        <Link href={`/project/${project.projectSlug}`}>
                            <div className="p-[1px] bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] overflow-hidden">
                                <div className="bg-[#1b2031] w-full h-full relative rounded-[72px] flex flex-col items-center gap-4">
                                    <div className="flex flex-col items-center mt-4 gap-2">
                                        <h1 className="text-xl font-mono">{project.projectTitle}</h1>
                                        <div className="flex gap-4">
                                            {project.label.map((label) => (
                                                <p
                                                    className={`text-xs text-white p-1 rounded-md border-[1px] uppercase font-mono 
                        ${label === 'web-site' ? 'bg-red-300/70 border-red-400' : 'bg-blue-200/10'}`}
                                                >
                                                    {label}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full h-full mt-auto">
                                        <Image className="object-cover" src={project.projectPhoto.url} alt="" width={1500} height={1000} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}