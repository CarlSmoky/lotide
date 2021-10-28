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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
  console.log(result);
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const abcd = { colour: "blue", b: "2", c: "3" };
eqObjects(ab, abcd); // => false

const dbc = { b: "2", colour: "blue", c: "3" };
eqObjects(abcd, dbc); // => true

const cba = { c: "3", a: "1", b: "2" };
eqObjects(abc, cba); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false