interface AboutMeCardProps {
    className?: string;
}

export const AboutMeCard = ({ className }: AboutMeCardProps) => {
    return (
        <div className={className}>
            <h1>About Me</h1>
        </div>
    )
}