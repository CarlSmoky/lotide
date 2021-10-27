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

const  middle = (arr) => {
  const length = arr.length;
  const middleIndex = Math.ceil(length / 2);
  let arrMiddle = [];
  if (length > 2) {
    if (length % 2 === 0) {
      arrMiddle = arr.slice(middleIndex - 1, middleIndex + 1);
    } else {
      arrMiddle = arr.slice(middleIndex - 1, middleIndex);
    }
  }
  return arrMiddle;
};


assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 300, 4, 'e', 'wer', 'r' ,33, 100, '100']), ['e', 'wer']);