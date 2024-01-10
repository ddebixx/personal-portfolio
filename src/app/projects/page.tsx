import { getProjects } from "@/fetchers/projects/getProjects"
import Link from "next/link"

export default async function ProjectsPage() {

    const projects = await getProjects()

    return (
        <>
            DUPA
            {projects.projects.map((project) => (
                <Link href={`/project/${project.projectSlug}`}>
                    <h1>{project.projectTitle}</h1>
                </Link>
            ))}
        </>
    )
}