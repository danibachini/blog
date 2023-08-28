
import { MongoClient, ObjectId } from "mongodb";

export async function getData (id) {
    const driver = process.env.MONGO_URL;
    const client = new MongoClient(driver);

    try {
        await client.connect();
        const post = await client
        .db('blogdb')
        .collection('posts')
        .findOne({ _id: new ObjectId(id) }, {projection: {
            _id: false, 
            description: false,
            imageThumbnail: false
        }});

        return (post);

    } catch (error) {
        return (error)

    } finally {
        client.close();
    }
}

export default async function eachPost( post ) {
    const data = await getData(post.params.id);
    return (
        <div className="text-center">
            <h1>{data.title}</h1>
            <h3 className="pt-3 text-sm text-left">Written on {data.date}</h3>
            <img className="py-4" src={data.imageTop} alt="Image" />
            <div className="pt-5">
                {data.text.map((paragraph) => (
                    <p> {paragraph} <br/><br/> </p>
                ))}
            </div>
        </div>
    )
}
