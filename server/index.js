const express = require("express");
const app = express(); // create express app
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// for client-side route, after the first two routes are not found
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(3000, () => {
  console.log("server started on port 3000");
});