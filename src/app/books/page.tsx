import { getBooks } from "@/fetchers/books/getBooks"
import Image from "next/image"

export default async function BooksPage() {
    const books = await getBooks()

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-screen flex flex-col items-center justify-center gap-8 max-[768px]:h-[400px] max-[768px]:p-8 max-[768px]:text-center">
                <Image className="object-cover" src="/MY_LIBRARY.png" alt="" width={1500} height={1000} />
                <p className="text-2xl text-white/70 font-mono max-[768px]:text-xl">Books that in some way changed my understanding of life</p>
            </div>
            <div className='grid grid-cols-3 w-full gap-16 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1 min-h-screen mt-32 max-[768px]:mt-0 max-[768px]:gap-8'>
                {books.myLibraries.map((book) => (
                    <div className="mt-32 p-[1px] bg-gradient-to-b h-[450px] rounded-[72px] from-[#FEFEFE]/30 to-[#8B96B1]/30 overflow-hidden flex flex-col items-center justify-center gap-4 col-span-1 border-white/20 min-h-[320px] hover:scale-105 transition max-[768px]:rounded-3xl"
                    key={book.bookTitle}>
                        <div className="bg-[#1b2031] w-full h-full relative rounded-[72px] flex flex-col items-center justify-start max-[768px]:rounded-3xl">
                            <div className="flex flex-col items-center gap-4 mt-8">
                                <div className="flex flex-col text-center px-4">
                                    <h1 className="text-2xl font-mono max-[500px]:text-xl">{book.bookTitle}</h1>
                                    <p className="font-mono text-lg text-white/70">{book.bookAuthor}</p>
                                </div>
                                <p className="text-base px-4 text-center text-white/50 max-[500px]:text-sm">{book.bookDescription}</p>
                            </div>
                            <div className="absolute left-0 right-0 -bottom-48 w-full h-full">
                                <Image className="saturate-[85%]" src={book.bookImage.url} layout="fill" objectFit="cover" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}