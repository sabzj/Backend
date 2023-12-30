import express from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  test,
  updateMovie,
} from "../controllers/movieController.js";

const router = express.Router();

// Route to get all movies
router.get("/", getAllMovies);

// route to get singlr movie
router.get("/:id", getMovieById);

//Route to create a new Movie
router.post("/", createMovie);
// router.post("/", test)

// route t o update existing movie
router.put("/:id", updateMovie);

//Route to delete a movie
router.delete("/:id", deleteMovie);
export default router;
