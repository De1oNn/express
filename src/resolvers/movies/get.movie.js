import fs from 'fs'

export const getMovies = (req, res) => {
    try {
        const getMovie = fs.readFileSync('src/db/movie.json')
        const movies = JSON.parse(getMovie);
        res.json(movies); 
    } catch(error) {
        console.error("There is a error", error);
    }
}       