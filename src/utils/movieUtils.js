import fs from 'fs'

export const readMovie = () => {
    try {
        const data = fs.readFileSync('src/db/movie.json')
        return JSON.parse(data) || [];
    } catch (error) {
        if(error.code === 'ENOENT') {
            return [];
        }
        console.error("Error reading movies", error);
        return []
    }
}

export const saveMovie = (movie) => {
    try {
        console.log("Saving movie", movie);
        fs.writeFileSync('src/db/movie.json' ,JSON.stringify(movie, null, 2));
    } catch (error) {
        console.error("Error saviing movie", error);
    }
}