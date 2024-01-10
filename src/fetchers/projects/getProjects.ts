import { client } from "@/apollo-client"
import { GetProjectsDocument } from "@/queries/projects/GetProjects.generated"
import { GetProjectsQuery } from "@/types"

export const getProjects = async () => {
    const { data: projects } = await client.query<GetProjectsQuery>({
        query: GetProjectsDocument
    })

    return projects
}