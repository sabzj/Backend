import { readFileSync } from "node:fs";
import http, { get } from "node:http";

const server = http.createServer((req, res) => {
  //   res.end("hi from my pc");
  const url = req.url;
  console.log(url);
  const method = req.method;
  //   console.log("method", method);
  //   console.log("url", url);
  //   res.end("hi there");

  switch (url) {
    case "/about":
      switch (method) {
        case "GET":
          const htmlFile = readFileSync("./src/index.html", "utf-8");
          res.end(htmlFile);
          return;
      }
    case "/style.css":
      switch (method) {
        case "GET":
          const cssFile = readFileSync("./src/style.css", "utf-8");
          console.log(cssFile);
          res.end(cssFile);
          return;
      }

    case "/app.js":
      switch (method) {
        case "GET":
          const jsFile = readFileSync("./src/app.js", "utf-8");
          console.log(jsFile);
          res.end(jsFile);
          return;
      }
    case "/video":
      res.end("audio and video");
      return;
  }

  //   switch (url) {
  //     case "/about":
  //     case "/style.css":
  //     case "server.js":
  //     case "video":
  //   }
});

server.listen(6060, () => {
  console.log("server listening on port 6060");
});
