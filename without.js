const eqArrays = (arr1, arr2) => {
  let result = true;
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


const without = (source, itemsToRemove) => {
  let result = [];
  for (let sourceItem of source) {
    let shouldKeep = true;
    for (let item of itemsToRemove) {
      if (sourceItem === item) {
        shouldKeep = false;
        continue;
      }
    }
    if (shouldKeep) {
      result.push(sourceItem);
    }
  }
  return result;
};

// console.log(without([1, 2, 3], [1])) // => [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(['hi', 89, "3"], [1, 2, "3"]), ["hi", 89]);
assertArraysEqual(without([1, 2, 3], [2, 4]), [1, 3]);
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["hello", "world", "lighthouse"]), []);

