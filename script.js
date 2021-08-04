"use-strict";

//selecting elements
const player0 = document.querySelector("#score--0");
const player1 = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
player0.textContent = 0;
player1.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//rolling dice functionality

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //check for rolled 1;
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
  //switch player
});
