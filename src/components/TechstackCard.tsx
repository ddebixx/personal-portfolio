import Link from "next/link"

interface TechstackCardProps {
    className?: string
}

export const TechstackCard = ({ className }: TechstackCardProps) => {
    return (
        <div className={className}>
            <Link href="/techstack">Techstack</Link>
        </div>
    )
}