const assertEqual = function(actual, expected) {
  let result = true;
  if (actual === expected) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

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

const eqObjects = function(object1, object2) {
  let result = false;
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
  const lengthObj1 = keyObj1.length;
  const lengthObj2 = keyObj2.length;
  if (lengthObj1 === lengthObj2) {
    for (const key of keyObj1) {
      if (Array.isArray(object1[key])) {
        result = eqArrays(object1[key], object2[key]);
      } else {
        result = assertEqual(object1[key], object2[key]);
      }
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const judge = eqObjects(actual, expected);
  let msg = '';
  if (judge) {
    msg = `🥑Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    msg = `🍕Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(msg);
};

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
console.log(eqObjects(object1, object2));
// assertObjectsEqual(eqObjects(object1, object2), true);
assertObjectsEqual(object1, object2);

let object3 = { b: 2, a: '1' , re: 2};
assertObjectsEqual(object1, object3);