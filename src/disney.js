// Add code here


const c = {
    
    //Assume that an empty Array or Array of Number s is passed in; No need to check types
    bestMovie(data) {
        let rating = 0;
        let movie = null;
        const movies = [];

        data.map((element) => 
        {if (parseFloat(element.imdb_rating) >= rating) {
            rating = parseFloat(element.imdb_rating);
        } });

        data.map((element) => 
        {if (parseFloat(element.imdb_rating) === rating) {
            movies.push(element);
        } });

        if (movies.length === 1) {
            movie = movies[0];
            return movie;
        } else {
            return movies;
        }
    }

    ,getMoviesByActor(data, actorName) {
        
        return data.filter(movie => 'Starring' in movie && movie.Starring.includes(actorName));
        
    }

    ,listCriticallyAcclaimedMovies(data) {
        
        return data.filter(movie => 'title' in movie && parseFloat(movie.metascore) > 8.0).map(movie => ({"title": movie.title, "metascore": movie.metascore}));

    }

    ,getAverageLength(data) {

        const filteredMovies = data.filter(movie => 'Running time (int)' in movie);
        const numberOfMovies = filteredMovies.length;

        const totalRunningTime = filteredMovies
            .map(movie => movie["Running time (int)"])
            .reduce( (accumulator, runningTime) => accumulator + runningTime);

        return totalRunningTime / numberOfMovies;
    }

};


module.exports = c;

