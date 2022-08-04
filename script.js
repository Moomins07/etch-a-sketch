"use strict";
const mainDiv = document.getElementById("container");
const btnPrompt = document.querySelector(".gridSize");
//INLINE BLOCK METHOD

// for (let i = 0; i < 16; i++) {
//   // Loop runs 16 times
//   for (let j = 0; j < 16; j++) {
//     // Loop within loop makes 16 divs every iteration
//     let div = document.createElement("div");
//     div.style.width = "50px";
//     div.style.height = "50px";
//     div.style.backgroundColor = "red";
//     mainDiv.appendChild(div); // appends div to main div 'container' 16 times
//   }
//   let jump = document.createElement("br"); // at end of loop (16 divs), breaks to next line
//   mainDiv.appendChild(jump); //
// }

btnPrompt.addEventListener("click", function () {
  let sizePrompt = prompt("How large would you like the grid?");
  let gridSize = sizePrompt * sizePrompt;

  if (typeof sizePrompt !== "number") {
    alert("Error, need a number!");
  } else if (sizePrompt > 50) {
    sizePrompt = 50;
    alert("Grid size must be 50 or less");
  }
  // SAME LOOP AND CODE BUT FOR GRID
  else if (typeof sizePrompt === 'number') {
    for (let i = 0; i < `${gridSize}`; i++) {
      let div = document.createElement("div");

      div.style.width = "50px";
      div.style.height = "50px";
      div.classList.add("newDivs");
      // div.style.backgroundColor = "red";
      mainDiv.style.cssText += `grid-template-columns: repeat(${sizePrompt}, 50px [col-start])`;
      mainDiv.appendChild(div);
    }

  let colour;

  let randColor = function () {
    const colours = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    let randNum = Math.floor(Math.random() * 7);
    colour = colours[randNum];
  };

  const item = document.querySelectorAll(".newDivs");

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("mouseover", function () {
      randColor();
      item[i].style.cssText += `background-color:${colour}`;
    });
  }
});
}