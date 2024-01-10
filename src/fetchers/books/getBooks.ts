import { client } from "@/apollo-client"
import { GetBooksDocument } from "@/queries/books/GetBooks.generated"
import { GetBooksQuery } from "@/types"

export const getBooks = async () => {
    const { data: books } = await client.query<GetBooksQuery>({
        query: GetBooksDocument
    })

    return books
}