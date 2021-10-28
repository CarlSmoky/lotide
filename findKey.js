const assertEqual = function(actual, expected) {
  let msg = '';
  if (actual === expected) {
    msg = `🥑Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🍕Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

const findKey = (obj, callback) => {
  let result = '';
  for (let key in obj) {
    if (callback(obj[key])) {
      result = key;
      break;
    }
  }
  return result;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');