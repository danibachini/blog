
const { MongoClient } = require('mongodb');

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text')
  const driver = process.env.MONGO_URL;
  const client = new MongoClient(driver);
  let limit = request.headers.get("limit")*1;

  try {
    await client.connect();

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
      // .project(projection ? JSON.parse(projection) : {})
      .limit(limit !== undefined && limit !== 0 ? limit : undefined)
      .sort({ score: -1 })
      .toArray();

    return new Response(JSON.stringify(posts))

  } catch (error) {
    return error;

  } finally {
    client.close();
  }
}
