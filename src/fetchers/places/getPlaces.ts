import { client } from "@/apollo-client"
import { GetPlacesDocument } from "@/queries/places/GetPlaces.generated"
import { GetPlacesQuery } from "@/types"

export const getPlaces = async () => {
    const { data: places } = await client.query<GetPlacesQuery>({
        query: GetPlacesDocument
    })

    return places
}