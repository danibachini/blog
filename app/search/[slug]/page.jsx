
import Image from "next/image";

export default async function Search( request ) {
    let input = request.params.slug;
    console.log('this is input: ', input);

    // let data = await fetch(`http://localhost:3000/api/search?text=${input}&projection={"_id":false,"description":false,"imageThumbnail":false}`, {
    let data = await fetch('http://localhost:3000/api/search?text='+input, {
        method: "GET",
        headers: {
            limit: undefined,
        }
    })

    console.log('data is: ', data);
    let result = await data.json();
    console.log('Result from DB is: ', result);

    return (
        <>
            {result.map((postObj) => (
                // <div className="hover:bg-neutral-100 rounded px-2 py-1">
                //     <p key={postObj._id}> {postObj.title} </p>
                // </div>
                 <a key={postObj._id} href={`/posts/${postObj._id}`}>
                    <div className='p-5 group items-center relative hover:bg-neutral-200 hover:scale-105 hover:shadow-2xl  duration-300'>
                        <h2>{postObj.title}</h2>
                        <p className='pb-1 truncate ... group-hover:whitespace-break-spaces'>{postObj.description}</p>
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


// !!!!!!!!!! RETURNS A LIST OF POST TITLES ACCORDING TO USER INPUT !!!!!!!!!!! 

// THIS PAGE IS RESPONSIBLE FOR GETTING THE SEARCH INPUT
// AND LOOK FOR MATCHES IN THE DATABASE

