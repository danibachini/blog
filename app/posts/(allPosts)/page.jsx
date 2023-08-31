import Image from 'next/image';
import { MongoClient } from "mongodb";

//  ADD PAGINATION HERE - 9/PAGE

async function getData() {
    const driver = process.env.MONGO_URL;
    const client = new MongoClient(driver);

    try {
        await client.connect();

        const allPosts = await client
            .db('blogdb')
            .collection('posts')
            .find({}, {projection: {
                text: false, 
                imageTop: false, 
                imageCenter: false, 
                date: false
            }})
            .sort({ date: -1 })
            .limit(20)
            .toArray();

        return allPosts

    } catch (error) {
        return (error)

    } finally {
        client.close();
    }
}

export default async function allPosts() {
    const postsList = await getData();

    return (
        <>
            {postsList.map((post) => (
                <a key={post._id} href={`/posts/${post._id}`}>
                    <div className='p-5 rounded-lg items-center relative hover:bg-neutral-100 hover:scale-105 hover:shadow-2xl duration-300'>
                        <h2 className='p-0'>{post.title}</h2>
                        <p className='pb-1 font-light'>{post.description}</p>
                        <div className="relative w-full h-24 ">
                            <Image
                                src={post.imageThumbnail}
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

export const metadata = {
    title: 'Galeeza Travel - Posts',
    description: 'All posts published by Galeeza',
}
