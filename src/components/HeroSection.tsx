"use client"

import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
    return (
        <div className="relative h-screen flex justify-between items-center max-[768px]:justify-end max-[768px]:flex-col max-[768px]:h-[500px]">
            <div className="w-full flex flex-col gap-4 max-[768px]:text-center">
                <h1 className="text-7xl font-mono max-[500px]:text-6xl">
                {`Hi! I'm`} <br />
                    <TypeAnimation
                        cursor={false}
                        sequence={[
                            'Andrew Naida',
                            2000,
                            'Frontend dev',
                            2000,
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        className="bg-gradient-to-b from-[#A0AAC4] to-[#9CA7C2] font-bold text-transparent bg-clip-text capitalize"
                    />
                </h1>
            </div>
            <div className="w-full bg-blue-200/10 rounded-full overflow-hidden shadow-[0_35px_60px_-15px_rgba(255,255,255,.1)] min-w-[250px] max-[768px]:absolute max-[768px]:-z-10 max-[768px]:top-8 backdrop-blur-sm">
                <Image src="/hero-avatar.png" className="object-cover" alt="hero" width={2000} height={1500} />
            </div>
        </div>
    )
}