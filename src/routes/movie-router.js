import express from "express";
import { createMovies } from "../resolvers/movies/create-movie.js";
import { deleteMovies } from "../resolvers/movies/delete-movie.js";
import { editMovies } from "../resolvers/movies/edit.movie.js";
import { getMovies } from "../resolvers/movies/get.movie.js";

export const movieRouter = express.Router();

movieRouter.get("/", getMovies)
movieRouter.post("/create-movie", createMovies)
movieRouter.delete("/", deleteMovies)
movieRouter.put("/", editMovies)