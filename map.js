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
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
const words2 = ["ask", "book", "chair", "dog", "email"];
const results2 = map(words2, word => word[0]);
assertArraysEqual(results2, ['a', 'b', 'c', 'd', 'e']);
const words3 = [" ", "book", "chair", "dog", "email"];
const results3 = map(words3, word => word[0]);
assertArraysEqual(results3, [' ', 'b', 'c', 'd', 'e']);