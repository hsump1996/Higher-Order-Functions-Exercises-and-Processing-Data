// Add code here


const c = {
    
    //Assume that an empty Array or Array of Number s is passed in; No need to check types
    bestMovie(data) {
        let rating = 0;
        let movie = null;
        let movies = [];

        data.map((element) => 
        {if (parseFloat(element.imdb_rating) >= rating) {
            rating = parseFloat(element.imdb_rating);
        } });

        data.map((element) => 
        {if (parseFloat(element.imdb_rating) == rating) {
            movies.push(element)
        } });

        if (movies.length === 1) {
            movie = movies[0];
            return movie;
        } else {
            return movies;
        }
    }

    ,getMoviesByActor(data, actor_name) {
        
        return data.filter(movie => 'Starring' in movie && movie.Starring.includes(actor_name));
        
    }

    ,listCriticallyAcclaimedMovies(data) {
        
        return data.filter(movie => 'title' in movie && parseFloat(movie.metascore) > 8.0).map(movie => ({"title": movie.title, "metascore": movie.metascore}));

    }

    ,getAverageLength(data) {


    }

}


module.exports = c;


const file = require("./disney_movies.json");

const data = JSON.parse(JSON.stringify(file))

console.log(c.listCriticallyAcclaimedMovies(data));
