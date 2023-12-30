import http from "node:http";
import { readFileSync } from "node:fs";
import { isUtf8 } from "node:buffer";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("method", method);

  if (method === "GET") {
    switch (url) {
      case "/raw-html":
        const rawHtml = "<h1>Welcome</h1>";
        res.end(rawHtml);
        return;
      case "/users":
        const usersFile = readFileSync("./users.json", "utf-8");
        res.end(usersFile);
        return;
      case "/":
        const htmlIndexFile = readFileSync("./index.html", "utf-8");
        res.end(htmlIndexFile);
        return;
      case "/style.css":
        const styleFile = readFileSync("./style.css", "utf-8");
        res.end(styleFile);
        return;
    }
  }
});

server.listen(5050, () => {
  console.log("server listening on port 5050");
});
