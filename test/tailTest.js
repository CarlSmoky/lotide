const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [3]);
  });
  it("returns ['Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Labs']);
  });
  it("returns [''] for ['']", () => {
    assert.deepEqual(tail(['']), ['']);
  });
  it("returns null for 'undefined'", () => {
    assert.deepEqual(tail(), null);
  });
});