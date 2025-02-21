import fs from 'fs';

export const deleteMovies = (req, res) => {
    const { title } = req.body
    const movieData = fs.readFileSync("src/db/movie.json");
    const movies = JSON.parse(movieData);

    const filteredMovies = movies.filter((cur) => cur.title !== title);

    fs.writeFileSync("src/db/movie.json", JSON.stringify(filteredMovies));

    res.send("Deleted")
}