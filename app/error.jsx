'use client'; // Error components must be Client Components
 
import Link from 'next/link';
import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className='text-center col-span-3'>
        <h2 className='mt-10'>Ops, I got something wrong here</h2>
        <h3>Help me try it again!</h3>

        <button className='btn my-10 border-neutral-100 bg-neutral-200 hover:bg-neutral-300 hover:text-neutral-800 hover:border-neutral-300'
            onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
            }>
            Try again
        </button>

        <h4 className='my-10'>I'm sorry, I don't know what's happening. <br/> Maybe someone in our team can help you</h4>
        <Link href="/contactUs" className='md:hover:text-neutral-800'>Contact the team</Link>

    </div>
  );
}