interface SocialCardProps {
    className?: string;
}

export const SocialCard = ({ className }: SocialCardProps) => {
    return (
        <div className={className}>
            <h1>Social</h1>
        </div>
    )
}