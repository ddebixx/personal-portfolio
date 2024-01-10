import { client } from "@/apollo-client"
import { GetProjectDocument } from "@/queries/projects/GetProject.generated"
import { GetProjectQuery } from "@/types"

export const getProject = async (projectSlug: string) => {
    const { data: project } = await client.query<GetProjectQuery>({
        query: GetProjectDocument,
        variables: { projectSlug }
    })

    return project
}