
// import getPosts from './route';
// 'use client'


// SERVER SIDE

// calls function in the searchInput file
// return all matching items to the page

// THIS PAGE IS RESPONSIBLE FOR GETTING THE SEARCH INPUT
// AND LOOK FOR MATCHES IN THE DATABASE


export default async function Search() {
    let data = await fetch('http://localhost:3000/api/search', {
        method: "GET",
    })
    let got = await data.json()
    console.log('data');
    console.log(got);
    return ("it's working")
}