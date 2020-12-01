const sumsTo2020 = (number1, number2) => {
  return number1 + number2 === 2020 ? true : false;
};

/**
  The algorithm for finding all possible pairs in an array:
  https://www.geeksforgeeks.org/find-all-pairs-possible-from-the-given-array/

*/
const pairItems = (array) => {
  return array.reduce(
    (acc, val, i1) => [
      ...acc,
      ...new Array(array.length - 1 - i1)
        .fill(0)
        .map((v, i2) => [array[i1], array[i1 + 1 + i2]]),
    ],
    []
  );
};

const returnFirstSummedPair = (items) => {
  const pairs = pairItems(items);

  const is2020 = pairs.filter((pair) => sumsTo2020(pair[0], pair[1]));

  // We could have an empty array
  if (is2020.length === 0) {
    return [];
  }
  // We could have one or more, but we want to return the first one
  return is2020[0];
};

const get2020Multiplier = (items) => {
  // So we want to make sure we get one item that is a matching pair
  const hasItem2020 = returnFirstSummedPair(items);
  hasItem2020;
  // And then we want to return each item of the single pair
  // multiplied by each other
  if (hasItem2020.length > 0) {
    return hasItem2020[0] * hasItem2020[1];
  } else {
    return false;
  }
};

module.exports = {
  sumsTo2020,
  pairItems,
  returnFirstSummedPair,
  get2020Multiplier,
};
