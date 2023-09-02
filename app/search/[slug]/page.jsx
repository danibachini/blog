
import Image from "next/image";

export default async function Search( request ) {
    const input = request.params.slug;
    const data = await fetch('http://localhost:3000/api/search?text='+input, {
        method: "GET",
        headers: {
            limit: undefined,
        }
    })
    const result = await data.json();

    return (
        <>
            {result.map((postObj) => (
                 <a key={postObj._id} href={`/posts/${postObj._id}`}>
                    <div className='p-5 rounded-lg items-center relative hover:bg-neutral-100 hover:scale-105 hover:shadow-2xl duration-300'>
                        <h2>{postObj.title}</h2>
                        <p className='pb-1 font-light'>{postObj.description}</p>
                        <div className="relative w-full h-24 ">
                            <Image
                                src={postObj.imageThumbnail}
                                alt="Thumbnail"
                                fill="{true}"
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                className='rounded object-cover'
                            />
                        </div>
                    </div>
                </a>
            ))}
        </>
    )
}
