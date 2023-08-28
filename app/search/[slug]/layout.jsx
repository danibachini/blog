
const allPostsLayout = ({children}) => {
    return (
        <div>
            <h1 className="text-center">Your Search Result</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
                {children}
            </div>
        </div>
    )
}

export default allPostsLayout;