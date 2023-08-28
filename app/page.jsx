
import { MongoClient } from "mongodb";
// const { MongoClient } = require('mongodb');

async function getData() {
  const driver = process.env.MONGO_URL;
  const client = new MongoClient(driver);
  
  try {
    await client.connect();
    const lastPost = await client
      .db('blogdb')
      .collection('posts')
      .find({}, {
        projection: {
          _id:false, 
          description:false
        }
      })
      .sort({ date: -1 })
      .limit(1)
      .toArray();
  
    return lastPost[0]
  
  } catch (error) {
    console.log('Error:', error);
  
  } finally {
    client.close();
  }
  return false
}

export default async function init() {
  let data = await getData()

  return (
    <>
      <div className="text-center">
        <h1>{data.title}</h1>
        <h3 className="pt-3 text-sm text-left">Written on {data.date}</h3>
        <img className="py-4" src={data.imageTop} alt="Image" />
        {/* <div className="grid-element">
          <Image
            src={data.imageTop}
            alt="Image"
            // width={300}
            // height={200}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='rounded object-fit: cover;'
          />
        </div>   */}
        
        <div className="pt-5">
          {data.text.map((paragraph) => (
            <p> {paragraph} <br/><br/> </p>
          ))}
        </div>
      </div>
    </>
  )
}

export async function generateMetadata() {
  const data = await getData();
  return {
    title: 'Galeeza Travel - ' + data.title,
    description: 'Information for travelers plan their trips',
  }
}
