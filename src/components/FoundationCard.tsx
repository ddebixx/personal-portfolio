import Image from "next/image";

interface FoundationCardProps {
    className?: string;
}

export const FoundationCard = ({ className }: FoundationCardProps) => {
    return (
        <div className={`relative p-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] p-[1px] max-[768px]:rounded-3xl">
                <div className="relative bg-[#1b2031] w-full h-full rounded-[72px] overflow-hidden max-[768px]:rounded-3xl">
                    <div className="flex items-start justify-end max-[768px]:flex-col max-[768px]:items-end max-[768px]:justify-end h-full overflow-hidden">
                        <div className="absolute left-0 -top-20 max-[600px]:min-w-[400px] w-full max-[768px]:top-0 max-[500px]:left-1/2 max-[500px]:-translate-x-1/2">
                            <Image src='/foundation.svg' className="object-cover" width={500} height={400} alt="" />
                            <Image src='/foundation.svg' className="absolute top-20 blur-[100px] min-[500px]:hidden" width={1000} height={400} alt="" />
                        </div>
                        <div className="absolute top-4 left-0 right-0 flex justify-center text-xl">
                            <h1 className="font-mono">Foundation of my work</h1>
                        </div>
                        <div className="w-[40%] flex flex-col self-center z-[222222] max-[768px]:self-start max-[768px]:py-8 max-[768px]:w-full gap-2">
                            <div className="flex flex-col gap-1 px-4">
                                <h1 className="text-xl font-mono max-[768px]:text-2xl max-[600px]:text-xl">Creativity</h1>
                                <p className="text-sm text-white/70 max-[768px]:text-base max-[600px]:text-sm">Unique product designs</p>
                            </div>
                            <div className="flex flex-col gap-1 px-4">
                                <h1 className="text-xl font-mono max-[768px]:text-2xl max-[600px]:text-xl">Simplicity</h1>
                                <p className="text-sm text-white/70 max-[768px]:text-base max-[600px]:text-sm">Reject complexity embrace the simple</p>
                            </div>
                            <div className="flex flex-col gap-1 px-4">
                                <h1 className="text-xl font-mono max-[768px]:text-2xl max-[600px]:text-xl">Functionality</h1>
                                <p className="text-sm text-white/70 max-[768px]:text-base max-[600px]:text-sm">Designs that serve a purpose</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}