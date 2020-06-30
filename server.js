// create an express server
const express = require("express");
const server = express();

// use the express-static middleware
server.use(express.static("public"));

// define the first route
server.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// start the server listening for requests
server.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
