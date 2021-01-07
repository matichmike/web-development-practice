const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send(`the answer is ${(Number(num1) + Number(num2))}`);
});

app.listen(3000, function() {
  console.log('Server is up on 3000');
});