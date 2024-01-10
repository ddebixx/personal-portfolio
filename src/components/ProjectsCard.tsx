import Link from "next/link"

interface ProjectsCardProps {
    className?: string
}

export const ProjectsCard = ({ className }: ProjectsCardProps) => {
    return (
        <div className={className}>
            <Link href="/projects">Projects</Link>
        </div>
    )
}