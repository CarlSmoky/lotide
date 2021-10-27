const eqArrays = (arr1, arr2) => {
  let result = true;
  if (!(arr1.length === arr2.length)) {
    result = false;
  }
  for (let i in arr1) {
    if (!(arr1[i] === arr2[i])) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = (arr1, arr2) => {
  const judge = eqArrays(arr1, arr2);
  let msg = '';
  if (judge) {
    msg = `🥑Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    msg = `🍕Assertion Failed: ${arr1} !== ${arr2}`;
  }
  console.log(msg);
};
const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence) {
    if (sentence[i] !== ' ') {
      let arr = [];
      if (results[sentence[i]]) {
        arr = results[sentence[i]];
        arr.push(Number(i));
      } else {
        arr = [Number(i)];
      }
      results[sentence[i]] = arr;
    }
  }
  return results;
};

assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('lighthouse lab').e, [9]);
assertArraysEqual(letterPositions('raisin alert!').r, [0, 10]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
