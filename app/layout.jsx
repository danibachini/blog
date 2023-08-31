
import './globals.css'
import NavBar from './navbar'
import Link from 'next/link'
import Image from 'next/image'

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-neutral-100'>

      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body suppressHydrationWarning={true}> 
      {/* suppressHydrationWarning to prevent error message due to extensions on the browser */}
        
        <div className='container px-6 lg:max-w-7xl flex flex-col min-h-screen ml-auto mr-auto fill'>

          <NavBar />
       
          <main className='mb-12'>
            {children}
          </main>

          <hr className='mt-auto' />

          <footer className='flex flex-wrap items-center justify-center gap-3 md:justify-between py-8 md:py-14 font-extralight'>
            <p className='w-full text-center md:w-auto'> 2023 - All Rights Reserved</p>

            <div>
              <Link href="/">
                <Image src="/logo-blue.png" alt="logo" width="205" height="25" className="cursor-pointer w-32" priority />
              </Link>
            </div>
            {/* <p className='w-full text-center md:w-auto'>Contact Us</p> */}
          </footer>
          
        </div>  

      </body>
    </html>
  )
}


