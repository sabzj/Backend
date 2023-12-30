import STATUS_CODE from "../constants/statusCodes.js";
import { readMoviesFromFile } from "../models/movieModels.js";
import { v4 as uuidv4 } from "uuid";

// description  Get all movies
// Route        Get /api/v1/movies
// access       public
export const getAllMovies = async (req, res, next) => {
  try {
    const movies = readMoviesFromFile();
    res.send(movies);
  } catch (error) {
    next(error);
  }
};

// description  Get all movies
// Route        Get /api/v1/movies/:id
// access       public
export const getMovieById = async (req, res, next) => {
  try {
    const movies = readMoviesFromFile();
    const movie = movies.find((m) => m.id === req.params.id);
    if (!movie) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Movie was not found");
    }
    res.send(movie);
  } catch (error) {
    next(error);
  }
};

// description  create a movies
// Route        POST /api/v1/movies/
// access       public
export const createMovie = (req, res, next) => {
  console.log("salam");
  try {
    const { title, director, releaseYear, rating } = req.body;
    if (!title || !director || !releaseYear || !rating) {
      res.send(STATUS_CODE.BAD_REQUEST);
      throw new error(
        "All fields (title, director, releaseYear, rating) are required"
      );
    }
    console.log(res.body);
    const movies = readMoviesFromFile();
    if (movies.some((m) => m.title === title)) {
      res.status(STATUS_CODE.CONFLICT);
      throw new error("Movie with the same title exists");
    }

    const newMovie = { id: uuidv4(), title, director, releaseYear, rating };
    movies.push(newMovie);
    res.status(STATUS_CODE.CREATED).send(newMovie);
  } catch (error) {
    res.status(STATUS_CODE.BAD_REQUEST);
    next(error);
  }
};

// description  update a movies
// Route        PUT /api/v1/movies/:id
// access       public
export const updateMovie = async (req, res, next) => {};

// description  delete a movies
// Route        delete /api/v1/movies/:id
// access       public
export const deleteMovie = async (req, res, next) => {};

export const test = (req, res, next) => {
  res.send("hell");
};
