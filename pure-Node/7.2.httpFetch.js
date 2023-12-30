import http from "node: http";
import axios from "axios";

const server = http.createServer((req, res) => {});

const fetchData = async () => {
    try {
        const result = await.axios("https://api.chucknorris.io/jokes/random")
    } catch (err) {
    console.error(err);
}}
server.listen(3030, () => {
  console.log("server listening to port");
});
