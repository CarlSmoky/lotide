// index.js
const head              = require('./head');
const tail              = require('./tail');
const middle            = require('./middle');
const map               = require('./map');
const countOnly         = require('./countOnly');
const countLetters      = require('./countLetters');
const findKey           = require('./findKey');
const findKeyByValue    = require('./findKeyByValue');
const letterPositions   = require('./letterPositions');
const takeUntil         = require('./takeUntil');
const without           = require('./without');

module.exports = {
  head:             head,
  tail:             tail,
  middle:           middle,
  map:              map,
  countOnly:        countOnly,
  countLetters:     countLetters,
  findKey:          findKey,
  findKeyByValue:   findKeyByValue,
  letterPositions:  letterPositions,
  takeUntil:        takeUntil,
  without:          without
};