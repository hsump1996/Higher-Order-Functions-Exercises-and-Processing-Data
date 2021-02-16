// Add code here

//Brings in the functions from disney.js
const c = require("./disney.js");

//Retrieves the path specified when report.js is run on the command line
const pathToFile = process.argv[2];

const file = require(pathToFile);

const data = JSON.parse(JSON.stringify(file));


//node src/report.js /Users/sunpyohong/Desktop/d/hsump1996-homework02/disney_movies/disney_movies.json

console.log(c.bestMovie(data));
console.log(`* The best movie by IMDB rating is: ${c.bestMovie(data)}`);
console.log(`* Top 5 Critically acclaimed movies: ${c.listCriticallyAcclaimedMovies(data)}`);
console.log(`* Movies starring Johnny Depp: ${c.getMoviesByActor(data, 'Johnny Depp')}`);
console.log(`* Average running time: ${c.getAverageLength(data)}`);

