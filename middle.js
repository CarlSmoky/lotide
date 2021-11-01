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

module.exports = middle;
