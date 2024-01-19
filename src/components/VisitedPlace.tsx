"use client"

import { getPlaces } from '@/fetchers/places/getPlaces';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

interface Place {
    placeImage?: { url: string }[];
}

interface VisitedPlaceProps {
    className?: string;
}

export const VisitedPlace = ({ className }: VisitedPlaceProps) => {
    const [places, setPlaces] = useState<Place[]>([]);
    const [placeName, setPlaceName] = useState<string>('');

    useEffect(() => {
        const fetchPlaces = async () => {
            const place = await getPlaces();
            setPlaces(place.places);
            setPlaceName(place.places[0].placeName);
        };

        fetchPlaces();
    }, []);

    return (
        <div className={`relative rounded-[72px] p-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] p-[1px]">
                <div className="relative bg-[#1b2031] w-full h-full rounded-[72px] overflow-hidden">
                    <div className='absolute top-0 w-full py-16 bg-black/30 blur-lg z-10'></div>
                    <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-10 w-full text-center p-4'>
                        <h1 className='z-[2222] text-xl text-white relative font-mono'>Recently visited place</h1>
                        <p className="text-lg text-white/50">{placeName}</p>
                    </div>
                    <Swiper className='w-full h-full'
                        spaceBetween={0}
                        slidesPerView={1}>
                        {places.map((place) => (
                            place.placeImage?.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image layout='fill' objectFit='cover' className='object-cover' src={image.url} alt="" />
                                </SwiperSlide>
                            ))
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}