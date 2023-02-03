"use strict";

const {createMarsRover} = require('./marsRover');

describe("marsRover", () => {
  it.todo("should do something really neat");

  it("test name", () => {
    //given

    //when

    //then
  });

  it("should create grid when positive upper right coordinates are given", () => {
    //given
    const marsRover = createMarsRover("5 5")
    const expectedGrid = {x: 5, y: 5}

    //when
    const actualGrid = marsRover.createGrid()

    //then
    expect(actualGrid).toEqual(expectedGrid)
  });

});
