import Link from "next/link"
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';

interface ContactCardProps {
    className?: string
}

export const ContactCard = ({ className }: ContactCardProps) => {
    return (
        <div className={`relative rounded-[72px] p-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE]/50 to-[#8B96B1]/50 rounded-[72px] p-[1px]">
                <div className="relative bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 w-full h-full rounded-[72px] overflow-hidden flex flex-col items-center justify-center">
                    <Link href='/contact'>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <WavingHandRoundedIcon className="text-[#2A2E38]" sx={{ fontSize: 84 }} />
                            <h1 className="text-2xl font-bold font-mono">Say Hi!</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}