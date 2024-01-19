"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Book, Code1, Folder2, Instagram, Menu, Message, User } from 'iconsax-react';
import Image from 'next/image';

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <>
            <nav className="flex items-center gap-4 fixed top-8 z-[22222222] cursor-pointer"
                onMouseEnter={() => setShowLinks(true)}>
                <Link href='/'>
                    <div className='flex gap-4 items-center w-full'>
                        <div className="w-12 h-12 bg-gradient-to-t from-[#D3D2D4] to-[#CAC9CA] rounded-full flex items-center justify-center">
                            <Image src="/map-pin.png" className="object-cover" alt="hero" width={2000} height={1500} />
                        </div>
                        <p className='uppercase font-semibold tracking-wider text-white/90 font-mono'>Andrew</p>
                        <Menu className="text-white/70 text-2xl" />
                    </div>
                </Link>
            </nav>
            <div className={`fixed left-0 right-0 top-4 m-auto p-[1px] bg-gradient-to-b from-[#FEFEFE]/30 to-[#8B96B1]/30 rounded-3xl w-fit overflow-hidden transition-all duration-500 ease-in-out ${showLinks ? 'opacity-100 visible' : 'opacity-0 invisible scale-50 transition duration-500'}`}
                onMouseLeave={() => setShowLinks(false)}>
                <div className={`relative flex flex-col items-center justify-center gap-2 w-fit p-8 bg-gradient-to-b from-[#262B36] to-[#1A1D25] rounded-3xl max-[600px]:flex-row`}>
                    <div className={`flex gap-2 max-[600px]:flex-col mt-16 ${showLinks ? 'delay-100 transition duration-500 scale-100 opacity-100 visible' : 'opacity-0 scale-50 invisible trasnsition duration-200'}`}>
                        <div className='border-[1px] border-white/20 rounded-3xl'>
                            <Link className='text-white flex flex-col gap-2 items-center justify-center w-32 h-32 bg-[#2A2E38] rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition' href='/projects'>
                                <Folder2 size={40} className='text-[#191930] text-[40px] bg-gradient-to-b p-2 from-[#FEFEFF] to-[#8792ad] rounded-lg shadow-[0_0_15px_5px_rgba(135,146,173,0.3)]' />
                                <p className='font-mono'>Projects</p>
                            </Link>
                        </div>
                        <div className='border-[1px] border-white/20 rounded-3xl'>
                            <Link className='text-white flex flex-col gap-2 items-center justify-center w-32 h-32 bg-[#2A2E38] rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition' href='/about-me'>
                                <User size={40} className='text-[#191930] text-[40px] p-2 bg-gradient-to-b from-[#FEFEFF] to-[#8792ad] rounded-lg shadow-[0_0_15px_5px_rgba(135,146,173,0.3)]' />
                                <p className='font-mono'>About me</p>
                            </Link>
                        </div>
                        <div className='border-[1px] border-white/20 rounded-3xl'>
                            <Link className='text-white flex flex-col gap-2 items-center justify-center w-32 h-32 bg-[#2A2E38] rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition' href='/contact'>
                                <Message size={40} className='text-[#191930] text-[40px] p-2 bg-gradient-to-b from-[#FEFEFF] to-[#8792ad] rounded-lg shadow-[0_0_15px_5px_rgba(135,146,173,0.3)]' />
                                <p className='font-mono'>Contact</p>
                            </Link>
                        </div>
                    </div>
                    <div className={`flex gap-2 max-[600px]:flex-col max-[600px]:mt-16 ${showLinks ? 'delay-100 transition duration-500 scale-100 opacity-100 visible' : 'opacity-0 scale-50 invisible trasnsition duration-200'}`}>
                        <div className='border-[1px] border-white/20 rounded-3xl'>
                            <Link className='text-white flex flex-col gap-2 items-center justify-center w-32 h-32 bg-[#2A2E38] rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition' href='/books'>
                                <Book size={40} className='text-[#191930] text-[40px] p-2 bg-gradient-to-b from-[#FEFEFF] to-[#8792ad] rounded-lg shadow-[0_0_15px_5px_rgba(135,146,173,0.3)]' />
                                <p className='font-mono'>Books</p>
                            </Link>
                        </div>
                        <div className='border-[1px] border-white/20 rounded-3xl'>
                            <Link className='text-white flex flex-col gap-2 items-center justify-center w-32 h-32 bg-[#2A2E38] rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition' href='/https://www.instagram.com/debix.cr2/'>
                                <Instagram size={40} className='text-[#191930] text-[40px] p-2 bg-gradient-to-b from-[#FEFEFF] to-[#8792ad] rounded-lg shadow-[0_0_15px_5px_rgba(135,146,173,0.3)]' />
                                <p className='font-mono'>Instagram</p>
                            </Link>
                        </div>
                        <div className='border-[1px] border-white/20 rounded-3xl'>
                            <Link className='text-white flex flex-col gap-2 items-center justify-center w-32 h-32 bg-[#2A2E38] rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition' href='/https://github.com/ddebixx'>
                                <Code1 size={40} className='text-[#191930] text-[40px] p-2 bg-gradient-to-b from-[#FEFEFF] to-[#8792ad] rounded-lg shadow-[0_0_15px_5px_rgba(135,146,173,0.3)]' />
                                <p className='font-mono'>GitHub</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}