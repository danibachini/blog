'use client'

import { useEffect, useRef, useState } from "react";

export default function SearchBar() {

    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);
    const timetout = useRef();
    const [selectedResult, setSelectedResult] = useState(null);

    useEffect(()=>{
        if(timetout.current){
            clearTimeout(timetout.current)
        }
        timetout.current = setTimeout(async () => {
            if(input){
                let data = await fetch('http://localhost:3000/api/search?text='+input, {
                    method: "GET",
                    headers: {
                        limit: 7
                    }
                })
                let result = await data.json();
                setResult(result);
            }
        }, 0);
    },[input])

    // setResult([])  // NOT SURE ABOUT THIS ONE - shows 'no result' while typying. however, I have to delete the last search

    return (
        <>
            {/* Search Input */}
            <form className={`md:flex ${'px-6 py-3 md:p-0 block'}`} onSubmit={e=>e.preventDefault()}>
                <label className="relative block menu menu-compact md:flex md:h-auto">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        {/* icon created by https://heroicons.com/ */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <input 
                    className="placeholder:italic placeholder:text-neutral-400 block bg-neutral-100 w-full rounded-md py-2 pl-10 pr-3 focus:bg-white focus:outline-none" 
                    placeholder="Search..." 
                    type="input" 
                    name="search"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onBlur={() => selectedResult ? setSelectedResult(result) : setInput('')}
                    />

                    {/* area to display the search results */}
                    <div>
                        {!input == '' && (
                            <div className="mt-auto w-full p-2 bg-white shadow-lg rounded-b max-h-96 overflow-y-auto absolute z-10">
                                {result.length > 0 ? (
                                    <>
                                        {result.map((postObj) => (
                                            <div className="hover:bg-neutral-100 rounded px-2 py-1">
                                                <a 
                                                key={postObj._id} 
                                                href={`/posts/${postObj._id}`} 
                                                onMouseDown={() => setSelectedResult(result)}
                                                >
                                                    {postObj.title}
                                                </a>
                                            </div>
                                        ))}
                                        <hr className="m-2"></hr>
                                        <div className="hover:bg-neutral-100 rounded px-2 py-1 text-center">
                                            <a 
                                            href={`/search/${input}`} 
                                            onMouseDown={() => setSelectedResult(result)} 
                                            className="text-pink-galeeza-200 hover:bg-neutral-100 rounded px-2 py-1"
                                            >
                                                See all results
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <p className="px-2 py-1">No matching results</p>
                                )}
                            </div>
                        )}
                    </div>
                </label>
            </form>
        </>
    )
}

