
import Image from 'next/image';
import Link from 'next/link';
import ButtonNav from '../components/ButtonNav';
import SearchBar from '../components/SearchComponent';

export default function NavBar() {

  return (
    <div>
        <nav className="w-full bg-neutral-100 top-0 left-0 right-0 z-10 static">
            <div className="mx-auto lg:max-w-7xl md:items-center md:flex md:justify-between md:h-32 container ">
                <div>
                    <div className="flex items-center justify-between md:justify-around py-8 md:block">

                        <Link href="/">
                            <Image src="/logo-blue.png" alt="logo" width="205" height="25" className="cursor-pointer w-32" priority />
                        </Link>

                        {/* Toggle button for mobile */}
                        <div className="md:hidden">
                            <ButtonNav/>
                        </div>

                    </div>
                </div>

                {/* Navbar Items */}
                <div className="md:block hidden">
                    <div className='md:flex'>
                        
                        {/* Search component */}
                        <SearchBar />

                        {/* Navbar Links */}
                        <div className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${'px-6 md:p-0 block'}`}>
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 pt-6 text-xl md:py-2 md:px-2 text-left md:border-b-0 md:hover:bg-transparent">
                                    <Link className='mx-2 border-b-2 border-transparent md:hover:border-pink-galeeza-100' href="/">Home</Link>
                                </li>

                                <li className="pb-6 text-xl md:py-2 md:px-2 text-left md:border-b-0 md:hover:bg-transparent">
                                    <Link className='mx-2 border-b-2 border-transparent md:hover:border-pink-galeeza-100' href="/posts">Posts</Link>
                                </li>
                                
                                <li className="pb-6 text-xl md:py-2 md:px-2 text-left md:border-b-0 md:hover:bg-transparent">
                                    <Link className='mx-2 border-b-2 border-transparent md:hover:border-pink-galeeza-100' href="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
