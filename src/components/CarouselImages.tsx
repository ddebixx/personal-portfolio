import { getPlaces } from "@/fetchers/places/getPlaces"
import Image from "next/image"

export const CarouselImages = async () => {
    const places = await getPlaces()

    return (
        <div className="bg-[#1b2031] w-full h-full">
            {places.places.map((place) => (
                <div key={place.placeName}>
                    {place.placeImage?.map((image) => (
                        <Image key={image.url} 
                        src={image.url} alt="" width={500} height={500} />
                    ))}
                </div>
            ))}
        </div>
    )
}
