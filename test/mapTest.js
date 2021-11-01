const assert = require('chai').assert;
const map    = require('../map');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns ['a', 'b', 'c', 'd', 'e'] for ['ask', 'book', 'chair', 'dog', 'email']", () => {
    assert.deepEqual(map(["ask", "book", "chair", "dog", "email"], word => word[0]), ['a', 'b', 'c', 'd', 'e']);
  });
  it("returns [' ', 'b', 'c', 'd', 'e'] for [' ', 'book', 'chair', 'dog', 'email']", () => {
    assert.deepEqual(map([' ', 'book', 'chair', 'dog', 'email'], word => word[0]), [' ', 'b', 'c', 'd', 'e']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(map([], word => word[0]), []);
  });
  it("returns 'string' for null", () => {
    assert.deepEqual(map('string', word => word[0]), null);
  });
});