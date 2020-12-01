const { sumsTo2020, pairItems, returnFirstSummedPair } = require("./day-1");

describe("Sums To 2020 function", () => {
  it("Should return false if numbers do not sum to 2020", () => {
    const number1 = 12;
    const number2 = 34;

    const actual = sumsTo2020(number1, number2);
    const expected = false;

    expect(actual).toEqual(expected);
  });
  it("Should return true if numbers sum to 2020", () => {
    const number1 = 299;
    const number2 = 1721;

    const actual = sumsTo2020(number1, number2);
    const expected = true;

    expect(actual).toEqual(expected);
  });
});

describe("Item pairing", () => {
  it("should return 1 pairs for an array of 2 items", () => {
    const initial = [1721, 299];

    const actual = pairItems(initial);
    const expected = 1;

    expect(actual.length).toEqual(expected);
  });
  it("should return 6 pairs for an array of 4 items", () => {
    const initial = [1721, 979, 366, 299];

    const actual = pairItems(initial);
    const expected = 6;

    expect(actual.length).toEqual(expected);
  });
  it("should return 15 pairs for an array of 6 items", () => {
    const initial = [1721, 979, 366, 299, 675, 1456];

    const actual = pairItems(initial);
    const expected = 15;

    expect(actual.length).toEqual(expected);
  });
});

describe("Finds the first pair that equals 2020 summed", () => {
  it("Does not find any pair summed that equals 2020", () => {
    const initial = [1720, 979, 366, 299, 675, 1456];
    const actual = returnFirstSummedPair(initial);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  it("Finds more than one pair but returns the first one", () => {
    const initial = [1721, 2019, 1, 299, 675, 1456];
    const actual = returnFirstSummedPair(initial);
    const expected = [1721, 299];

    actual;
    expect(actual).toEqual(expected);
  });
});
