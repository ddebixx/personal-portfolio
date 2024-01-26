import Image from "next/image";
import Link from "next/link";

interface AboutMeCardProps {
    className?: string;
}

export const AboutMeCard = ({ className }: AboutMeCardProps) => {
    return (
        <div className={`relative p-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] p-[1px] max-[768px]:rounded-3xl">
                <div className="relative bg-[#1b2031] w-full h-full rounded-[72px] overflow-hidden font-mono max-[768px]:rounded-3xl">
                    <Image className="absolute left-16 top-0 w-full h-full" src="/about-me.png" alt="me" width={1500} height={1500} />
                </div>
            </div>
        </div>
    )
}