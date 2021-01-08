const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {
  const query = req.body.cityName;
  const apiKey = "01ecbda577f947cd14c19065eb63bf47";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.list[0].main.temp;
      const feelsLike = weatherData.list[0].main.feels_like;
      const description = weatherData.list[0].weather[0].description;
      const icon = weatherData.list[0].weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      
      res.write(`<h1>${query}: The temp is ${temp}, feels like ${feelsLike} and it is ${description}</h1>`);
      res.write(`<img src=${imageURL}>`);
      res.send();
    })
  })
  
});




app.listen(3000, function(){
  console.log("Server is running on 3000");
});