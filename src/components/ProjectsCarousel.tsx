"use client"

import { getProject } from '@/fetchers/projects/getProject';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

interface Project {
    projectsPhotos?: { url: string }[];
}

export const ProjectsCarousel = ({ params }: {
    params: { slug: string };
}) => {
    const [project, setProject] = useState<Project[]>([]);


    useEffect(() => {
        const fetchProject = async () => {
            const project = await getProject(params.slug);
            console.log('Project:', project);
            setProject(project.project?.projectsPhotos as Project[]);
            console.log('Project state:', project);
        };

        fetchProject();
    }, [params.slug]);

    return (
        <div className="relative rounded-[72px] p-1 flex flex-col items-start col-span-1 overflow-hidden w-full h-96 border-white/20">
            <div className="absolute -z-30 inset-0 bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-[72px] p-[1px]">
                <div className="relative bg-[#1b2031] w-full h-full rounded-[72px] overflow-hidden">
                    <Swiper className='w-full h-96 '
                        spaceBetween={0}
                        slidesPerView={1}>
                        {project.map((projectPhoto, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    width={1500}
                                    height={1500}
                                    src={projectPhoto.projectsPhotos?.map((url) => url.url as string)?.[0] || ''}
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}