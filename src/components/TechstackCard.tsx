"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

interface TechstackCardProps {
    className?: string
}

export const TechstackCard = ({ className }: TechstackCardProps) => {
    return (
        <div className={`p-[1px] bg-gradient-to-b rounded-[72px] from-[#FEFEFE]/30 to-[#8B96B1]/30 overflow-hidden max-[768px]:rounded-3xl ${className}`}>
            <div className="bg-[#1b2031] w-full h-full relative rounded-[72px] flex flex-col items-center justify-start max-[768px]:rounded-3xl">
                <Link href="/techstack">
                    <div className="flex flex-col items-center mt-4">
                        <h1 className="text-3xl font-mono">Techstack</h1>
                        <p className="text-lg text-white/50">Technologies I love to use</p>
                    </div>
                    <div className="absolute left-0 right-0 -bottom-32 w-full h-full max-[768px]:-bottom-24">
                        <Image className="saturate-[85%]" src="/Tech.png" layout="fill" objectFit="cover" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}