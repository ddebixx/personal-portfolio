interface GithubCardProps {
    className?: string;
}

export const GithubCard = ({ className }: GithubCardProps) => {
    return (
        <div className={className}>
            <h1>Github</h1>
        </div>
    )
}