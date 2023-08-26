

// SERVER SIDE
// export function to be called in two different places: navbar and search page

// HERE
// function takes two arguments 
// function(input, type)
// if in the navbar, call the function will be the input and the type title 
// for this, the funtion retuns only the titles and also get from the database only the titles
// if the function is called in the search page.jsx, it calls function(input, all)
// so the function return the title, description and picture in the page

// En fait je pensais que tu ferais un mix de ssr et csr 
// Genre du csr pour qu'à chaque keystroke tu fasses une 
// liste de propositions directement dans un dropdow du search 
// et quand tu cliques sur enter ça mets dans l'URL ta query et
//  tu changes de page en faisant du ssr

// text search - case insensitive (caseSensitive:false) - get the scores - display in desc order -1 (greater to smaller)


// function type options
// function type resultOfSearch


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
