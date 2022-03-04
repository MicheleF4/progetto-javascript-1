"use strict";

let box = document.querySelector(".box");
let displayText = document.querySelector(".box__display-text");
let displayScreen = document.querySelector(".box__display");

let num = 0;

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
