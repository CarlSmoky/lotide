const map = function(array, callback) {
  if (!Array.isArray(array)) {
    return null;
  }
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results);
  return results;
};

module.exports = map;