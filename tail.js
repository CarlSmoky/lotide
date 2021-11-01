const tail = function(arr) {
  if (typeof arr === 'undefined') {
    return null;
  }
  const tailArr = arr.slice(arr.length - 1);
  return tailArr;
};

module.exports = tail;
