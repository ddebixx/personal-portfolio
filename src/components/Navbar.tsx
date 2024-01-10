"use client"

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="flex items-center gap-4 fixed top-16"
            onMouseEnter={() => setShowLinks(true)}
            onMouseLeave={() => setShowLinks(false)}>
            <div className="w-12 h-12 bg-[#404040] rounded-full flex items-center justify-center">
                ME
            </div>
            <p>Andrew</p>
            <MenuRoundedIcon className='text-white text-3xl' />
            <div className=''>
                <div className={`absolute p-2 rounded flex gap-8 w-96 transition-all duration-500 ease-in-out ${showLinks ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <Link className='text-white' href='/projects'>Projects</Link>
                    <Link className='text-white' href='/about'>About me</Link>
                    <Link className='text-white' href='/contact'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}