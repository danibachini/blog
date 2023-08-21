


const { MongoClient } = require('mongodb');
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text')

  console.log(request.headers.get("limit"));

  const driver = process.env.MONGO_URL;
  const client = new MongoClient(driver);

  let limit = request.headers.get("limit")*1

  try {
    await client.connect();
    console.log("Database connected");

    const db = client.db('blogdb');
    const posts = await db
      .collection('posts')
      .find(
        {
          $text: {
            $search: text,
            $language: "en",
          }
        },
        {
          score: { $meta: "textScore" }
        }
      )
      // .limit(limit !== undefined && limit !== 0 ? limit : undefined)
      .limit(10)
      .sort({ score: -1 })
      .toArray();

    return new Response(JSON.stringify(posts))

  } catch (error) {
    return error;

  } finally {
    client.close();
    console.log("Database connection closed");
  }

  return new Response(JSON.stringify({ data: text }))
}
