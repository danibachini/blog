
export default function allPostsLayout({children}) {
    return (
        <div>
            <h1 className="text-center">Check our posts</h1>

            <div className='pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
                {children}
            </div>
        </div>
    )
}
