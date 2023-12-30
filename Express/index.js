const express = require(express);
const app = express();

const port = 7777;

// tasks object
let tasksData = {};
// Reads tasks data
function readTasksData() {
  const tasksDataString = fs.readFileSync("./tasks.json", "utf-8");
  tasksData = JSON.parse(tasksDataString);
}

app.use("*", (req, res, next) => {
  next();
});

app.GET("/tasks", (req, res) => {});

app.POST("/tasks:id", (req, res) => {});
app.get("/tasks", (req, res) => {});
app.get("/tasks", (req, res) => {});
