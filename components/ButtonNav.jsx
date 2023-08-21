'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SearchBar from './SearchComponent';

export default function ButtonNav() {

    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);
    useEffect(()=>{
        setNavbar(false)
    },[pathname])

    return (
        <>
            <div >
                <button className="p-2 outline-none" onClick={() => setNavbar(true)}>
                    {/* close toggle icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button> 

                {navbar && 
                <div className="absolute inset-0 bg-neutral-100 z-50 px-6 h-auto">
                    <div className="mx-auto lg:max-w-7xl md:items-center md:flex md:justify-between container">
                        <div>
                            <div className="flex items-center justify-between md:justify-around py-8 md:block">
                                <Link href="/">
                                    <Image src="/logo-blue.png" alt="logo" width="205" height="25" className="cursor-pointer w-32" priority />
                                </Link>

                                {/* toggle for mobile */}
                                <div className="md:hidden">
                                    <button onClick={()=>setNavbar(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navbar items */}
                    <div className='md:flex'>
                        <SearchBar />
                    </div>

                    {/* Navbar links */}
                    <div className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${'px-6 md:p-0 block'}`}>
                        <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                            <li className="pb-6 pt-6 text-xl md:py-2 md:px-2 text-left md:border-b-0 md:hover:bg-transparent">
                                <Link onClick={() => setNavbar(!navbar)} className='mx-2 border-b-2 border-transparent md:hover:border-pink-galeeza-100' href="/">Home</Link>
                            </li>

                            <li className="pb-6 text-xl md:py-2 md:px-2 text-left md:border-b-0 md:hover:bg-transparent">
                                <Link onClick={() => setNavbar(!navbar)} className='mx-2 border-b-2 border-transparent md:hover:border-pink-galeeza-100' href="/posts">Posts</Link>
                            </li>
                            
                            <li className="pb-6 text-xl md:py-2 md:px-2 text-left md:border-b-0 md:hover:bg-transparent">
                                <Link onClick={() => setNavbar(!navbar)} className='mx-2 border-b-2 border-transparent md:hover:border-pink-galeeza-100' href="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                }
            </div>
        </>
  )}