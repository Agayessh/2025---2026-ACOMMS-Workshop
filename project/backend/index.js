const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { text } = req.body;

  const newTask = {
    id: nextId++,
    text,
  };
  tasks.push(newTask);
  res.json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "Task deleted" });
});



app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
