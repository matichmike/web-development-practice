const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.listen(3000, function() {
  console.log("server is running on 3000");
});