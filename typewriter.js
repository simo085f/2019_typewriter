"use strict";

window.addEventListener("DOMContentLoaded", init);
let text = document.querySelector("#typewriter").textContent;
let counter = 0;
let speed = 250;

function init() {
  document.querySelector("#typewriter").textContent = " ";
  loop();
}

function loop() {
  if (counter < text.length) {
    document.querySelector("#typewriter").textContent += text.charAt(counter);
    counter++;
    setTimeout(loop, speed);
  }
}
