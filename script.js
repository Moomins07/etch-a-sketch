"use strict";
const mainDiv = document.getElementById("container");
const btnPrompt = document.querySelector(".gridSize");
const allNewDivs = document.querySelector(".newDivs");
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

function removeAllChildNodes(parent) {
  // mainDiv
  while (parent.firstChild) {
    // While mainDiv has firstChild
    parent.removeChild(parent.firstChild); // mainDiv.removeChild (mainDiv.firstChild)
  } // Because it is a while-loop, it will keep removing the firstChild until none left
}

let sizePrompt;
let gridSize;
let div;

let init = function () {
  sizePrompt = 0;
  gridSize = 0;
};

btnPrompt.addEventListener("click", function () {
  init();
  removeAllChildNodes(mainDiv);
  sizePrompt = prompt("How large would you like the grid?");
  gridSize = sizePrompt * sizePrompt;
  console.log(sizePrompt);
  console.log(gridSize);

  if (isNaN(sizePrompt)) {
    alert("Error, need a number!");
  } else if (sizePrompt > 50) {
    sizePrompt = 50;
    alert("Grid size must be 50 or less");
  }
  // SAME LOOP AND CODE BUT FOR GRID
  else
    for (let i = 0; i < `${gridSize}`; i++) {
      div = document.createElement("div");

      div.style.width = "50px";
      div.style.height = "50px";
      div.classList.add("newDivs");
      // div.style.backgroundColor = "red";
      mainDiv.style.cssText += `grid-template-columns: repeat(${sizePrompt}, 50px [col-start])`;
      console.log(sizePrompt);
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
