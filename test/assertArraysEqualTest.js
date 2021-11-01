const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[1, 2, '3']);
assertArraysEqual([1, 2, 3],[1, 3, 3]);
assertArraysEqual([1, '2', 3],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[1, 'ni', '3', 3]);