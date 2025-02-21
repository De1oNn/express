import fs from "fs";

export const editMovies = (req, res) => {
  try {
    const { title, Genre, description, director, year } = req.body;
    console.log("Request body:", req.body); // Log incoming data

    // Basic validation: require title to identify the movie
    if (!title) {
      return res.status(400).json({ message: "Current title is required" });
    }
    if (!Genre && !description && !director && !year) {
      return res.status(400).json({
        message:
          "At least one field (Genre, description, director, or year) must be provided",
      });
    }

    // Read the movies file
    console.log("Reading file from src/db/movie.json"); // Confirm file read attempt
    const getData = fs.readFileSync("src/db/movie.json", "utf8");
    const movies = JSON.parse(getData);
    console.log("Current movies data:", movies); // Log parsed data

    // Update the movie data
    let movieUpdated = false;
    const newMovieData = movies.map((cur) => {
      if (cur.title === title) {
        movieUpdated = true;
        console.log("Found movie to update:", cur); // Log the matched movie
        return {
          ...cur,
          Genre: Genre || cur.Genre,
          description: description || cur.description,
          director: director || cur.director,
          year: year || cur.year,
        };
      }
      return cur;
    });
    console.log("Updated movies data:", newMovieData); // Log updated data

    // If no movie was found, send an error
    if (!movieUpdated) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Write the updated data back to the file
    console.log("Writing to src/db/movie.json"); // Confirm write attempt
    fs.writeFileSync(
      "src/db/movie.json",
      JSON.stringify(newMovieData, null, 2),
      "utf8"
    );

    // Send success response
    res.json({ message: "Successfully updated movie data" });
  } catch (error) {
    console.error("Error updating movie:", error);
    res
      .status(500)
      .json({ message: "Failed to update movie data", error: error.message });
  }
};
