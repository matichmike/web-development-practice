const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  console.log(firstName, lastName, email)
})

app.listen(3000, function() {
  console.log("server is running on 3000");
});