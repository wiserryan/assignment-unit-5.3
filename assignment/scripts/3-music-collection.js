console.log('***** Music Collection *****')
// ## Part 3 - Building a Music Collection
// Update the `3-music-collection.js` file to do the following:
// > While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

// ### Required Features
// - Create a variable `collection` that starts as an empty array.
//   - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

let collection = [];

function addToCollection (title, artist, yearPublished){
//create an object to push in to the Array
};
// during office hours Chris pointed out that I had created two Array's with const a;lbum = []
//const album = [ //created two Array's...
collection.push (    
{
    title: 'Hazard',
    artist: 'The Wedges',
    yearPublished: '2015',
},
{
    title: 'Bunkers',
    artist: 'Sandman',
    yearPublished: '2019',
},
//]
//console.log(album);
//console.table(album);
{
     title: 'Breakfast Ball',
     artist: 'Hackers',
     yearPublished: '2018',
 },
//]
//console.log(album);
//console.table(album);
{
     title: 'Dogleg',
     artist: 'The Wedges',
     yearPublished: '2017',
 },
//]
//console.log(album);
//console.table(album);
 {
     title: 'Brogey',
     artist: 'Happy Gilmore',
     yearPublished: '2016',
 },
//]
//console.log(album);
//console.table(album);
 {
     title: 'Weekend Duffers',
     artist: 'The Wedges',
     yearPublished: '2015',
 },
//]
//console.log(album);
//console.table(album);
 {
     title: 'Snowman',
     artist: 'Quadputts',
     yearPublished: '2015',
 },
);

console.table(collection);

//console.log(addToCollection);

console.log(addToCollection);// I believe this is where I am going wrong....
console.table(collection);// keep getting object paired with object // I used += here earlier, incorrectly
//function addToCollection (title, artist, yearPublished){
console.log(addToCollection('Snowman', 'Quadputts', '2015'));
// - Test the `addToCollection` function:

//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//unsure what these two are asking here//

//(correct return?) - After all are added, console.log the `collection` array.


function showCollection(array) {  
      console.log(array.length)   
       for (let i=0; i <= array.length; i++)
        console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
       }

showCollection(collection);// throwing an error here, unsure of where

//   - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.

function findByArtist(artist) {{
    let artistList = []
    for (let i=0; i < collection.length; i++)
    artistList.push(collection.artist[i])
}
{   return artistList = []
}
}

findByArtist('The Wedges');

console.log(test);
//failing to see my errors here before I can console.log my functions

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!











