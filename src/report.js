// Add code here

//Brings in the functions from disney.js
const c = require("./disney.js");

//Retrieves the path specified when report.js is run on the command line
const pathToFile = process.argv[2];

const file = require(pathToFile);

const data = JSON.parse(JSON.stringify(file));


//node src/report.js /Users/sunpyohong/Desktop/d/hsump1996-homework02/disney_movies/disney_movies.json
//The best movie by IMDB rating, title only
console.log(`* The best movie by IMDB rating is: ${c.bestMovie(data).title}`);

//Top 5 Critically acclaimed movies, as an Array of objects with movie title and meta
console.log(`* Top 5 Critically acclaimed movies: ` + JSON.stringify(c.listCriticallyAcclaimedMovies(data).slice(0,5)));

const movies = c.getMoviesByActor(data, "Johnny Depp");

const titles = movies.map(movie => movie.title);

//Movies starring Johnny Depp, as an Array of titles only
console.log(`* Movies starring Johnny Depp: ` + JSON.stringify(titles));

//Average runtime of all movies
console.log(`* Average running time: ${c.getAverageLength(data)}`);


// Shows Bar Chart for Top 3 highly acclaimed movies.
const acclaimedMovies = c.listCriticallyAcclaimedMovies(data).slice(0,3);

const metascores = acclaimedMovies.map(movie => movie.metascore);
const titles2 = acclaimedMovies.map(movie => movie.title);

const fs = require('fs');
const fullBarLength = 200;
const svgContents = 
`<svg xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="25" width="${metascores[0]/10 * fullBarLength}" height="25" fill="red">
</rect>
<text x="250" y="45" fill="black" font-size="15"> ${titles2[0]}
</text>
<rect x="0" y="55" width="${metascores[1]/10 * fullBarLength}" height="25" fill="green">
</rect>  
<text x="250" y="75" fill="black" font-size="15"> ${titles2[1]}
</text>
<rect x="0" y="85" width="${metascores[2]/10 * fullBarLength}" height="25" fill="blue">
</rect>
<text x="250" y="105" fill="black" font-size="15"> ${titles2[2]}
</text>
</svg>`;

fs.writeFile('chart.svg', svgContents, function(error) {
    if (error) { 
        return console.log("Error has occurred!");
    }
});
