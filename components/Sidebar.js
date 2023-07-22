"use client";

import { useEffect, useState } from 'react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaRegNewspaper } from "react-icons/fa"
import { BiSpreadsheet } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { HiSearch } from "react-icons/hi"
import { GoHome } from "react-icons/go"
import { TfiBell } from "react-icons/tfi"
import { IoLogOutOutline } from "react-icons/io5"

const Sidebar = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setShowNavbar(!isAtBottom);
            console.log(showNavbar)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            {/* Desktop Navigation */}
            <div className='flex sm:hidden md:contents'>
                <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                    <div className='flex flex-col items-center h-full'>
                        <Link href="/">
                            <Image src="/logo.png" alt='logo' height={20} width={40} className='cursor-pointer' />
                        </Link>
                        <Link href='/'>
                            <div className='bg-white text-white p-3 rounded-lg inline-block hover:scale-110'>
                                <HiSearch size={22} fill='gray' />
                            </div>
                        </Link>
                        <div className='w-full md:mt-10'>
                            <Link href='/'>
                                <div className='bg-[#4131dd]  cursor-pointer mt-4 p-3 rounded-lg inline-block shadow-lg shadow-[#a29bea] hover:scale-110' >
                                    <GoHome size={25} fill='white' />
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className=' hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block hover:scale-110'>
                                    <FaRegNewspaper size={25} fill='gray' />
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className=' hover:bg-gray-200 cursor-pointer mb-3  p-3 rounded-lg inline-block hover:scale-110'>
                                    <BiSpreadsheet size={25} fill='gray' />
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className=' hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block hover:scale-110'>
                                    <BsPerson size={25} fill='gray' />
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col mt-auto gap-6'>
                            <div className='flex'>
                                <TfiBell size={20} fill='gray' className='cursor-pointer hover:scale-110' />
                                <div className='rounded-[50%] bg-blue-500 w-[6px] h-[6px]' />
                            </div>
                            <IoLogOutOutline size={25} stroke='gray' className='cursor-pointer hover:scale-110' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */}

            <div className='md:hidden'>
                <div className={`${showNavbar ? 'fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200' : 'hidden'}`}>
                    <div className=" h-full max-w-lg flex justify-between mx-auto">
                        <div className="inline-flex flex-col justify-center ">
                            <Link href='/customer'>
                                <div className='cursor-pointer my-4 p-3 rounded-lg inline-block bg-[#4131dd] shadow-xl shadow-[#a29bea] hover:scale-110'>
                                    <GoHome size={25} fill='white' />
                                </div>
                            </Link>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center ">
                            <Link href='/'>
                                <div className=' hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
                                    <FaRegNewspaper size={25} fill='gray' />
                                </div>
                            </Link>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center ">
                            <Link href='/'>
                                <div className=' hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
                                    <BiSpreadsheet size={25} fill='gray' />
                                </div>
                            </Link>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center ">
                            <Link href='/'>
                                <div className=' hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
                                    <BsPerson size={25} fill='gray' />
                                </div>
                            </Link>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center ">
                            <Link href='/'>
                                <div className=' hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
                                    <HiSearch size={20} fill='gray' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <button
                    className={`fixed bottom-4 bg-[#3921ec] hover:bg-[#14037f] p-5 font-semibold cursor-pointer z-10 text-white w-full ${showNavbar ? 'hidden' : ''
                        }`}
                ><p>Update</p>
                </button>
            </div>
            <main className='w-full'>{children}</main>
        </div>
    )
}

export default Sidebar