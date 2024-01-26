import Image from "next/image";
import Link from "next/link";

interface GithubCardProps {
    className?: string;
}

export const GithubCard = ({ className }: GithubCardProps) => {
    return (
        <div className={`relative p-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] p-[1px] max-[768px]:rounded-3xl">
                <Link href="https://github.com/ddebixx">
                    <div className="relative bg-[#1b2031] w-full h-full rounded-[72px] flex flex-col items-center justify-center max-[768px]:rounded-3xl">
                        <Image src="/github.svg" width={100} height={100} alt="" />
                        <h1 className="text-3xl font-mono">Github</h1>
                        <p className="text-lg text-white/50">Here I share my projects</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}