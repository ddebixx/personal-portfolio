import { getProject } from "@/fetchers/projects/getProject";


export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = await getProject(params.slug)

    return (
        <div>
            {project.project?.projectTitle}
        </div>
    )
}