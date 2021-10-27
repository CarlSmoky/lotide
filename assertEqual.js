// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let msg = '';
  if (actual === expected) {
    msg = `🥑Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🍕Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, '1');
assertEqual(1, 3);