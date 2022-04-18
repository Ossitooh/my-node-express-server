const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send(`
  <h1>About</h1>
  <div>
    <h2>Carlos Rivera</h2>
    <p>I'm a full stack software engineer</p>
  </div>
  `);
});

const testingConnection = () => {
  console.log("Server started on port 3000");
};
app.listen(3117, testingConnection);
