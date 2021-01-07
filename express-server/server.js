//jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send('<h1>Hello</h1>');
});

app.get("/contact", function(req,res) {
  res.send('<p>Dont contact me</p>')
});

app.get("/about", function(req,res) {
  res.send('<p>Bio goes here</p>')
});

app.get("/hobbies", function(req,res) {
  res.send('<p>None</p>')
});

app.get("/skills", function(req,res) {
  res.send('<p>Master of eating</p>')
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});