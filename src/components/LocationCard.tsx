"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

interface LocationCardProps {
    className?: string;
}

export const LocationCard = ({ className }: LocationCardProps) => {
    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const [time, setTime] = useState(formatTime(new Date()));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(formatTime(new Date()));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={`relative p-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] max-[768px]:rounded-3xl p-[1px]">
                <div className="relative bg-[#1b2031] w-full h-full rounded-[72px] max-[768px]:rounded-3xl overflow-hidden flex flex-col gap-8 items-center justify-center p-8 max-[500px]:gap-4 max-[768px]:p-2">
                    <div className="relative bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 w-full h-full rounded-[72px] max-[768px]:rounded-3xl overflow-hidden">
                        <Image className="object-cover rounded-[72px] max-[768px]:rounded-3xl w-full h-full" src="/map.png" alt="" width={1500} height={1500} />
                    </div>
                    <div className="flex flex-col items-center gap-2 max-[500px]:gap-1 text-center">
                        <h1 className="text-xl font-mono">Zielona Góra, Poland</h1>
                        <p className="text-lg opacity-50">{time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}