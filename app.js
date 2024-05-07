const express = require("express");
const path = require("path");

const app = express();
const port = 8092;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`lukacupic server running at ${port}`);
});
