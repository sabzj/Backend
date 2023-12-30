const request = require("request");
// npm install request

// Fetch data using the request module
const url = "https://api.chucknorris.io/jokes/random";

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const filteredData = JSON.parse(body);
    console.log("body", body);
    console.log("filteredData:", filteredData);
    console.log("value:", data.value);
  } else {
    console.log("error: ${error}");
  }
});

// using Axis
import axios from "axios";
