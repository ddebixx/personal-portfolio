import Link from "next/link"

interface BooksCardProps {
    className?: string
}

export const BooksCard = ({ className }: BooksCardProps) => {
    return (
        <div className={className}>
            <Link href="/books">Books</Link>
        </div>
    )
}