import { readMovie, saveMovie } from '../../utils/movieUtils.js'

export const createMovies = (req, res) => {
    const { title, Genres, description, director, year } = req.body;

    if (!title || !Genres || !description || !director || !year) {
        return res.status(400).send("All fields are required.")
    }

    const movies = readMovie();
    if (movies.some((movie) => movie.title === title)) {
        return res.status(400).send("Movie already exist")
    }
    movies.push({ title, Genres, description, director, year });
    saveMovie(movies)

    res.send("Save movie successful!")
}