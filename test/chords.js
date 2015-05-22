'use strict';
var vows = require('vows');
var assert = require('assert');

var achord = require('../');

var tests = {};
function addTest(chord, intervals) {
  var result = achord(intervals);
  var descr = intervals.join(',') + " should '" + chord + "' was '" + result + "'";
  tests[chord] = function() {
    assert(result == chord, descr);
  }
}

addTest('M', ['P1', 'M3', 'P5']);
addTest('b5', ['P1', 'M3', 'd5']);
addTest('#5', ['P1', 'M3', 'A5']);
addTest('6', ['P1', 'M3', 'P5', 'M6']);
addTest('#6', ['P1', 'M3', 'P5', 'A6']);
addTest('Maj7', ['P1', 'M3', 'P5', 'M7']);
addTest('7', ['P1', 'M3', 'P5', 'm7']);
addTest('#5Maj7', ['P1', 'M3', 'A5', 'M7']);
addTest('7b5', ['P1', 'M3', 'd5', 'm7']);
addTest('9', ['P1', 'M3', 'P5', 'm7', 'M9']);
addTest('#9', ['P1', 'M3', 'P5', 'm7', 'A9']);
addTest('b9', ['P1', 'M3', 'P5', 'm7', 'm9']);
addTest('Maj79', ['P1', 'M3', 'P5', 'M7', 'M9']);
addTest('6/9', ['P1', 'M3', 'P5', 'M6', 'M9']);
addTest('#11', ['P1', 'M3', 'P5', 'm7', 'M9', 'A11']);
addTest('13', ['P1', 'M3', 'P5', 'm7', 'M9', 'P11', 'M13']);
addTest('13#9b5', ['P1', 'M3', 'd5', 'm7', 'A9', 'P11', 'M13']);

addTest('m', ['P1', 'm3', 'P5']);
addTest('m6', ['P1', 'm3', 'P5', 'M6']);
addTest('mMaj7', ['P1', 'm3', 'P5', 'M7']);
addTest('mb6', ['P1', 'm3', 'P5', 'm6']);

addTest('ø', ['P1', 'm3', 'd5']);
addTest('7b5', ['P1', 'm3', 'd5', 'm7']);
addTest('ø7', ['P1', 'm3', 'd5', 'd7']);

addTest('7sus4', ['P1', 'P4', 'P5', 'm7']);
addTest('5', ['P1', 'P5']);

addTest('#5#9', ['P1', 'M3', 'A5', 'm7', 'A9']);
addTest('m(11b5b9)', ['P1', 'm3', 'd5', 'm7', 'm9', 'P11']);
addTest('m11', ['P1', 'm3', 'P5', 'm7', 'M9', 'P11']);
addTest('m13b5#9', ['P1', 'm3', 'd5', 'm7', 'A9', 'P11', 'M13']);

vows.describe('AChord').addBatch(tests).export(module);
