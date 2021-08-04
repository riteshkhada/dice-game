"use-strict";
const player0 = document.querySelector("#score--0");
const player1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

player0.textContent = 0;
player1.textContent = 0;

dice.classList.add("hidden");
