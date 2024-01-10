import Link from "next/link"

interface ContactCardProps {
    className?: string
}

export const ContactCard = ({ className }: ContactCardProps) => {
    return (
        <div className={className}>
            <Link href="/contact">CONTACT</Link>
        </div>
    )
}