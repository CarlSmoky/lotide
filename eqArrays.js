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
module.exports = eqArrays;