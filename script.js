"use-strict";

//selecting elements
const player0 = document.querySelector("#score--0");
const player1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
player0.textContent = 0;
player1.textContent = 0;
diceEl.classList.add("hidden");

//rolling dice functionality

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
});

//display dice
diceEl.classList.remove("hidden");
diceEl.src = `dice-${dice}.png`;
//check for no 1; if true, switch to next player
