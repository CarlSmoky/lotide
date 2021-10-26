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

assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[1, 2, '3']);
assertArraysEqual([1, 2, 3],[1, 3, 3]);
assertArraysEqual([1, '2', 3],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[1, 'ni', '3', 3]);