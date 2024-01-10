import { client } from "@/apollo-client"
import { GetTechDocument } from "@/queries/techstack/GetTech.generated"
import { GetTechQuery } from "@/types"

export const getTech = async () => {
    const { data: tech } = await client.query<GetTechQuery>({
        query: GetTechDocument
    })

    return tech
}