import fs from "fs";
import { filePath } from "../utils/dataFilePath.js";

const readMoviesFromFile = () => {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    throw new error("Error reading from movie file");
  }
};

const writeMoviesToFile = (movies) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(movies), "utf-8");
  } catch (error) {
    throw new error("Error writing to the movies file");
  }
};

export { readMoviesFromFile, writeMoviesToFile };
