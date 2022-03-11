"use strict";

let box = document.querySelector(".box");
let displayScreen = document.querySelector(".box__display");

let displayContainer = document.querySelector(".box__display-container");
let buttonContainer1 = document.getElementById("buttonContainer-1");
let buttonContainer2 = document.getElementById("buttonContainer-2");
let boxCol2 = document.querySelector(".box__col--2");

let displayText = document.createElement("h1");
let buttonDecrease = document.createElement("button");
let buttonDecrease2 = document.createElement("button");
let buttonIncrease = document.createElement("button");
let buttonReset = document.createElement("button");

displayText.classList.add("box__display-text");
buttonDecrease.classList.add("box__button", "decrease-button");
buttonDecrease2.classList.add("box__button", "decrease-button", "u-hidden");
buttonIncrease.classList.add("box__button", "increase-button");
buttonReset.classList.add("box__reset-btn", "u-button-universal");

buttonDecrease.textContent = "-";
buttonDecrease2.textContent = "-";
buttonIncrease.textContent = "+";
buttonReset.textContent = "RESET";

buttonContainer1.append(buttonDecrease);
buttonContainer2.append(buttonDecrease2);
buttonContainer2.append(buttonIncrease);
displayContainer.append(displayText);
boxCol2.append(buttonReset);

buttonDecrease.setAttribute("data-action", "decrease");
buttonDecrease2.setAttribute("data-action", "decrease");
buttonIncrease.setAttribute("data-action", "increase");
buttonReset.setAttribute("data-action", "reset");

let num = 0;
displayText.textContent = num;

box.addEventListener("click", function (e) {
  e = event.target.dataset.action;

  switch (e) {
    case "decrease":
      displayText.textContent = --num;
      displayScreen.style.transition = "transform .2s";

      displayScreen.classList.add("u-rotate-left");
      setTimeout(function () {
        displayScreen.classList.remove("u-rotate-left");
      }, 300);
      break;

    case "increase":
      displayText.textContent = ++num;
      displayScreen.style.transition = "transform .2s";

      displayScreen.classList.add("u-rotate-right");
      setTimeout(function () {
        displayScreen.classList.remove("u-rotate-right");
      }, 300);
      break;

    case "reset":
      num = 0;
      displayText.textContent = num;
      displayScreen.style.transition = "transform 1s";
      displayScreen.classList.add("u-reset-rotation");
      setTimeout(function () {
        displayScreen.classList.remove("u-reset-rotation");
      }, 1000);
      break;
  }
});
