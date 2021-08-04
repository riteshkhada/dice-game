"use-strict";

//selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
score0.textContent = 0;
score1.textContent = 0;
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
  }
  //switch to next player
  else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
});
//add scores to active player score
btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];

  //check if player score is >=100

  //switch to next player
});
