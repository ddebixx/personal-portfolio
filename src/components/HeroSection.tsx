"use client"

import Image from "next/image"

export const HeroSection = () => {
    return (
        <div className="relative h-screen flex justify-between items-center">
            <div className="w-full flex flex-col gap-4">
                <h1 className="text-7xl font-mono">Hi!I'm <br /> <span className="bg-gradient-to-b from-[#A0AAC4] to-[#9CA7C2] font-bold text-transparent bg-clip-text capitalize">Andrew Naida</span></h1>
                <h2 className="text-2xl text-white/50 font-thin font-sans tracking-wide">Ambitious frontend developer</h2>
            </div>
            <div className="w-full bg-blue-200/10 rounded-full overflow-hidden shadow-[0_35px_60px_-15px_rgba(255,255,255,.1)]">
                    <Image src="/hero-avatar.png" className="object-cover" alt="hero" width={2000} height={1500} />
            </div>
        </div>
    )
}