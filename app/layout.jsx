
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
       
          <main>
            {children}
          </main>

          <footer className='h-24 flex justify-between mt-auto py-14'>
            <div>
              {/* LOGO */}
              <Link href="/">
                <Image src="/logo-blue.png" alt="logo" width="205" height="25" className="cursor-pointer w-32" priority />
              </Link>
              <p className='w-auto'>©</p>
            </div>

            <p className='w-auto'> 2023 - All Rights Reserved</p>
            <p>Contact Us</p>
          </footer>
          
        </div>  

      </body>
    </html>
  )
}


