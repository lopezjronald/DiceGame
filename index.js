var randomNumber1 = Math.ceil(Math.random()*6);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.ceil(Math.random()*6);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

var winner;

if (randomNumber1 > randomNumber2) {
    winner = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    winner = "Player 2 Wins!";
} else {
    winner = "Draw!";
}

document.querySelector("h1").innerHTML = winner;


