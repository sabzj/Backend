const fs = require("fs");
import { copyFile, constants } from "fs";

const userData = {
  name: "john",
  id: 2,
  email: "john@gmail.com",
};

const userJSON = JSON.stringify(userData);
// console.log(userJSON);

// const parseduser = JSON.parse(userJSON);
// console.log(parseduser);

//create file.JSON
// fs.writeFileSync("users.json", userJSON);

// read file
const userBuffer = fs.readFileSync("users.json");
const dataJSON = userBuffer.toString();
const dataObj = JSON.parse(dataJSON);
// console.log(dataObj.name);

// update file
dataObj.name = "george";
dataObj.id = 658;
dataObj.email = "george.hotmail.com";

const userDtatAgain = JSON.stringify(dataObj);
fs.writeFileSync("users.json", userDtatAgain);

// copy file

function checkError(err) {
  if (err) throw error;
  console.log("zafer.txt was copied to Ahmad.txt");
}
copyFile("zafer.txt", "Ahmad.txt", checkError);

// delete file
fs.unlink("./crudToDelete.js", (err) => {
  if (err) {
    console.error("Error deleting the file:", err);
  } else {
    console.log("File deleted successfully");
  }
});
