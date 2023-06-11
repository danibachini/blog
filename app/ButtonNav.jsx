'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

                                {/* LOGO */}
                                <Link href="/">
                                    <Image src="/logo-blue.png" alt="logo" width="205" height="25" className="cursor-pointer w-32" priority />
                                </Link>

                                {/* TOGGLE (HAMBURGER BUTTON) FOR MOBILE */}
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

                    {/* Navbar Items */}
                    <div className='md:flex'>

                        {/* Search Input */}
                        <div className={`md:flex border-b border-neutral-300 ${ 'px-6 py-3 md:p-0 block'}`}>
                            <lable className="relative block menu menu-compact md:flex md:h-auto">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    {/* icon created by https://heroicons.com/ */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </span>
                                <input src="/searchInput.jsx" className="placeholder:italic placeholder:text-neutral-400 block bg-neutral-100 w-full rounded-md py-2 pl-10 pr-3 focus:outline-none " placeholder="Search..." type="input" name="search"/>
                            </lable>
                        </div>

                    </div>


                    <span className='border-b border-black h-1'/>
                    {/* Navbar Links */}
                    <div
                    className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                        'px-6 md:p-0 block'
                    }`}
                    >
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