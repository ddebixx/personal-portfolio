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

    console.log(placeName);

    return (
        <div className={className}>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full text-center  p-4'>
                <h1 className='z-[2222] text-xl text-white/70 relative'>{placeName}</h1>
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

    )
}