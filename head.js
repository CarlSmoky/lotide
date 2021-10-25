// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  let msg = '';
  if (actual === expected) {
    msg = `🥑Assertion Passed: ${actual} === ${expected}`
  } else {
    msg = `🍕Assertion Failed: ${actual} !== ${expected}`
  }
  console.log(msg);
};

const head = arr => {
 return arr[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([0]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
