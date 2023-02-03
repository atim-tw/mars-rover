"use strict";

//console.log();

/*const run = () => {
  console.log("Welcome to Mars!");
};*/

function createMarsRover(input) {
  let inputGrid = { x: 0, y: 0}
  const cornerInput = input

  function createGrid() {
    let cornerArray = cornerInput.split(" ")
    const x = Number(cornerArray[0])
    const y = Number(cornerArray[1])
    return inputGrid = {x: x, y: y}
  }

  return {
    createGrid
  }
}


module.exports = { createMarsRover };
//run();
