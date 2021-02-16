// Add code here

//Brings in the functions from disney.js
const c = require("./disney.js");
const d = require("./drawing.js");

//Retrieves the path specified when report.js is run on the command line
const pathToFile = process.argv[2];

const file = require(pathToFile);

const data = JSON.parse(JSON.stringify(file));


//node src/report.js /Users/sunpyohong/Desktop/d/hsump1996-homework02/disney_movies/disney_movies.json
//The best movie by IMDB rating, title only
console.log(`* The best movie by IMDB rating is: ${c.bestMovie(data).title}`);

//Top 5 Critically acclaimed movies, as an Array of objects with movie title and meta
console.log(`* Top 5 Critically acclaimed movies: ` + JSON.stringify(c.listCriticallyAcclaimedMovies(data).slice(0,5)));

let movies = c.getMoviesByActor(data, "Johnny Depp");

let titles = movies.map(movie => movie.title);

//Movies starring Johnny Depp, as an Array of titles only
console.log(`* Movies starring Johnny Depp: ` + JSON.stringify(titles));

//Average runtime of all movies
console.log(`* Average running time: ${c.getAverageLength(data)}`);



// Top 3 highly acclaimed movies.
const acclaimedMovies = c.listCriticallyAcclaimedMovies(data).slice(0,2);
const acclaimedMovie1 = acclaimedMovies[0];
const acclaimedMovie2 = acclaimedMovies[1];
const acclaimedMovie3 = acclaimedMovies[2];

const root = 
`<svg xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="25" width="200" height="25" fill="green">
</rect>
<text x="210" y="45" fill="black" font-size="20"> ${acclaimedMovie1}
</text>
<rect x="0" y="55" width="65" height="25" fill="green">
</rect>
<text x="70" y="75" fill="black" font-size="20"> ${acclaimedMovie2}
</text>
<rect x="0" y="85" width="240" height="25" fill="green">
</rect>
<text x="250" y="105" fill="black" font-size="20"> ${acclaimedMovie3}
</text>
</svg>`;

root.write('chart.svg', () => console.log('done writing!'));





