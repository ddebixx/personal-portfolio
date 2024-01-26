import { getProject } from "@/fetchers/projects/getProject";
import Image from "next/image";
import styles from '../../../styles/Project.module.css'

export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = await getProject(params.slug)

    return (
        <div className="flex flex-col items-center gap-16">
            <div className="h-screen flex flex-col gap-8 justify-center items-center max-[768px]:h-[500px] max-[768px]:p-8 max-[768px]:text-center">
                <Image src={project.project?.projectTitlePhoto?.url as string} alt="" width={1000} height={500} />
                <p className="text-xl text-white/70">{project.project?.projectHero}</p>
                <div className="flex gap-4">
                    {project.project?.label?.map((label) => (
                        <p key={label}
                            className={`text-sm text-white p-2 rounded-md border-[1px] uppercase font-mono 
        ${label === 'web-site' ? 'bg-red-300/70 border-red-400' : 'bg-blue-200/10'}`}
                        >
                            {label}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex items-start gap-8 max-[768px]:flex-col-reverse">
                <div className="w-[70%] sticky top-16 flex flex-col gap-8 max-[768px]:w-full">
                    <h1 className="text-xl w-fit font-mono p-1 bg-blue-200/10 border-[1px] rounded-xl">About project</h1>
                    <div className="text-lg text-white/80" dangerouslySetInnerHTML={{ __html: project.project?.projectDescription.html as string }}></div>
                    <div className={`${styles.project} flex flex-col gap-8`}>
                        <h1 className="text-xl w-fit font-mono p-1 bg-blue-200/10 border-[1px] rounded-xl">Project idea</h1>
                        <div className="text-lg text-white/80" dangerouslySetInnerHTML={{ __html: project.project?.projectIdea?.html as string }}></div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-xl w-fit font-mono p-1 bg-blue-200/10 border-[1px] rounded-xl">Project techstack</h1>
                        <div className="grid grid-cols-3 gap-4 max-[768px]:grid-cols-2 max-[768px]:w-[70%]">
                            {project.project?.techStack.map((tech) => (
                                <p key={tech}
                                    className="text-sm cursor-pointer font-mono p-1 w-fit rounded-md bg-blue-200/10 border-[1px] border-blue-200 hover:bg-blue-200/50 transition duration-300 ease-in-out">
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-8 max-[768px]:flex-row max-[768px]:overflow-scroll max-[768px]:snap-center max-[768px]:min-w-[300px]">
                    {project.project?.projectsPhotos?.map((projectPhoto) => (
                        <Image key={projectPhoto.url} 
                        src={projectPhoto.url} alt="" width={2000} height={500} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}