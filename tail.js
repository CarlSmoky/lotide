const assertEqual = function(actual, expected) {
  let msg = '';
  if (actual === expected) {
    msg = `🥑Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🍕Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

const tail = function(arr) {
  const tailArr = arr.slice(1);
  return tailArr;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail([1, 'e', 7, 'pp']));
console.log(tail([0, 1, 2]));
console.log(tail([1]));
console.log(tail([]));