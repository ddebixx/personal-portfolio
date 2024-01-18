import Image from "next/image";

interface FoundationCardProps {
    className?: string;
}

export const FoundationCard = ({ className }: FoundationCardProps) => {
    return (
        <div className={`relative rounded-[72px] p-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] p-[1px]">
                <div className="relative bg-[#1b2031] w-full h-full rounded-[72px] overflow-hidden">
                    <div className="flex items-start justify-start">
                        <div className="relative w-full">
                            <Image src='/foundation.svg' className="absolute -top-20" width={500} height={400} alt="" />
                        </div>
                        <div className="absolute top-4 left-0 right-0 flex justify-center text-xl">
                            <h1 className="font-mono">Foundation of my work</h1>
                        </div>
                        <div className="w-[50%] py-16 flex flex-col gap-4">
                            <div className="flex flex-col gap-1 px-4">
                                <h1 className="text-xl font-mono">Creativity</h1>
                                <p className="text-sm text-white/70">Unique product designs</p>
                            </div>
                            <div className="flex flex-col gap-1 px-4">
                                <h1 className="text-xl font-mono">Simplicity</h1>
                                <p className="text-sm text-white/70">Reject complexity embrace the simple</p>
                            </div>
                            <div className="flex flex-col gap-1 px-4">
                                <h1 className="text-xl font-mono">Functionality</h1>
                                <p className="text-sm text-white/70">Designs that serve a purpose</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}