import { Express } from "express";
const app = Express();

const port = 8598;

//post
app.post("/movies", (rq, res) => {
  console.log(res);
  res.send("");
});

app.listener(port, () => {
  console.log("Server is listening to port ${port");
});
