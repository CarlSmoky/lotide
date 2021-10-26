const eqArrays = (arr1, arr2) => {
  let result = true;
  for (let i in arr1) {
    if (!(arr1[i] === arr2[i])) {
      result = false;
    }
  }
  return result;
};



const assertEqual = function(actual, expected) {
  let msg = '';
  if (actual === expected) {
    msg = `🥑Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🍕Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);