const express = require("express");
const https = require("https");

const app = express();
const url = "https://api.openweathermap.org/data/2.5/find?q=Toronto&appid=01ecbda577f947cd14c19065eb63bf47&units=metric";
app.get("/", function(req,res) {
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.list[0].main.temp;
      const feelsLike = weatherData.list[0].main.feels_like;
      const description = weatherData.list[0].weather[0].description;
      
      res.write(`<h1>Toronto: The temp is ${temp}, feels like ${feelsLike} and it is ${description}</h1>`)
      res.send();
    })
  })
});



app.listen(3000, function(){
  console.log("Server is running on 3000");
});