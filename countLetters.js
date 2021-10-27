const assertEqual = function(actual, expected) {
  let msg = '';
  if (actual === expected) {
    msg = `🥑Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🍕Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

const countLetters = word => {
  const result = {};
  for (let letter of word) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

countLetters('LHL');
countLetters("lighthouse in the house");