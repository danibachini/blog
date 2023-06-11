

// SERVER SIDE
// export function to be called in two different places: navbar and search page

// HERE
// function takes two arguments 
// function(input, type)
// if in the navbar, call the function will be the input and the type title 
// for this, the funtion retuns only the titles and also get from the database only the titles
// if the function is called in the search page.jsx, it calls function(input, all)
// so the function return the title, description and picture in the page


const { MongoClient } = require('mongodb');

export default async function getPosts(searchString, types){
    const driver = process.env.MONGO_URL;
    const client = new MongoClient(driver);
    console.log("got inside the function");

    try {
        await client.connect();
        console.log("db connected");

        const posts = await client
            .db('blogdb')
            .collection('posts')
            .find(
                { 
                    $text: { 
                        $search: searchString, 
                        $language: "en", 
                        $fields: { title: 1, description: 1, text: 1 } 
                    } 
                }, 
                {
                    projection: Object.keys(types).length === 0 ? {} : types,
                    score: { $meta: "textScore" }
                }
            )
            .limit(limit !== undefined && limit !== 0 ? limit : undefined)
            .sort({ score: -1 })
            .toArray();

        return posts

    } catch (error) {
        return (error)

    } finally {
        client.close();
        console.log("connection closed");
    }
}








// En fait je pensais que tu ferais un mix de ssr et csr 
// Genre du csr pour qu'à chaque keystroke tu fasses une 
// liste de propositions directement dans un dropdow du search 
// et quand tu cliques sur enter ça mets dans l'URL ta query et
//  tu changes de page en faisant du ssr


// text search - case insensitive (caseSensitive:false) - get the scores - display in desc order -1 (greater to smaller)





