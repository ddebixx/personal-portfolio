interface FoundationCardProps {
    className?: string;
}

export const FoundationCard = ({ className }: FoundationCardProps) => {
    return (
        <div className={className}>
            <h1>Foundation</h1>
        </div>
    )
}