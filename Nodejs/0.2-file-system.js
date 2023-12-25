const fs = require("fs");
const fsPromises = require("fs").promises;

// create a new txt file:
// fs.writeFileSync("zafer.txt", "This is a nodejs new txt file");
// https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback

// create a copy of the newly created txt file:
// fs.copyFileSync("zafer.txt", "zafercopy.txt");
// https://nodejs.org/api/fs.html#fscopyfilesrc-dest-mode-callback

// rename one of the files using a method from the fs module
// fs.renameSync("zafercopy.txt", "zafer2.txt");
// https://nodejs.org/api/fs.html#fscopyfilesrc-dest-mode-callback

// get list of files from the current directory
// const detailsOfDirectory = fs.readdirSync("./");
// console.log("detailsOfDirectory", detailsOfDirectory);
// https://nodejs.org/api/fs.html#fsreaddirsyncpath-options

// Find out and implement another method for the fs module

const filePath = "zafer.txt";

async function checkFileAccessibility() {
  try {
    await fsPromises.access(filePath);
    console.log(`File ${filePath} is accessible.`);
  } catch (error) {
    console.error(`Error accessing file ${filePath}: ${error.message}`);
  }
}
checkFileAccessibility();
