import { getBooks } from "@/fetchers/books/getBooks"

export default async function BooksPage() {

    const books = await getBooks()

    return (
        <div>
            {books.myLibraries.map((book) => (        
                    <h1>{book.bookTitle}</h1>
            ))}
        </div>
    )
}