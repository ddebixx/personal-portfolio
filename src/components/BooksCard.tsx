import Image from "next/image"
import Link from "next/link"

interface BooksCardProps {
    className?: string
}

export const BooksCard = ({ className }: BooksCardProps) => {
    return (
        <div className={`p-[1px] bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] overflow-hidden ${className}`}>
            <div className="bg-[#1b2031] w-full h-full relative rounded-[72px] flex flex-col items-center justify-start">
                <Link href="/books">
                    <div className="flex flex-col items-center mt-8">
                        <h1 className="text-3xl font-mono">Books</h1>
                        <p className="text-lg text-white/50">Books I love to read</p>
                    </div>
                    <div className="absolute left-0 right-0 -bottom-32 w-full h-full">
                        <Image className="saturate-[85%]" src="/books.png" layout="fill" objectFit="cover" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}