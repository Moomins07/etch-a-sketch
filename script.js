"use strict";
const mainDiv = document.getElementById("container");

for (let i = 0; i < 16; i++) {
  // Loop runs 16 times
  for (let j = 0; j < 16; j++) {
    // Loop within loop makes 16 divs every iteration
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "red";
    mainDiv.appendChild(div); // appends div to main div 'container' 16 times
  }
  let jump = document.createElement("br"); // at end of loop (16 divs), breaks to next line
  mainDiv.appendChild(jump); //
}
