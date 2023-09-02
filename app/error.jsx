'use client'; // Error components must be Client Components

import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
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

    </div>
  );
}