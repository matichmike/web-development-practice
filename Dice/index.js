let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImageSource = `images/dice${randomNumber1}.png`;
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randomDiceImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImageSource2 = `images/dice${randomNumber2}.png`;
let image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randomDiceImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "👺Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!👺";
} else {
  document.querySelector("h1").innerHTML = "👺Draw!👺";
}