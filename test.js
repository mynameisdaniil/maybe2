var maybe    = require('./index');
var reporter = require('nodeunit').reporters.default;


var undefinedVar = undefined;
var nullVar = null;
var numberVar = 0;
var booleanVar = false;
var stringVar = '';
var objectVar = {};
var functionVar = function() {};
var arrVar = [];
var classVar = new Date();

exports.isEmpty = function(test) {
  test.equal(maybe(undefinedVar).isEmpty(), true,  'undefinedVar');
  test.equal(maybe(nullVar).isEmpty(),      true,  'nullVar');
  test.equal(maybe(numberVar).isEmpty(),    false, 'numberVar');
  test.equal(maybe(booleanVar).isEmpty(),   false, 'booleanVar');
  test.equal(maybe(stringVar).isEmpty(),    false, 'stringVar');
  test.equal(maybe(objectVar).isEmpty(),    false, 'objectVar');
  test.equal(maybe(functionVar).isEmpty(),  false, 'functionVar');
  test.equal(maybe(arrVar).isEmpty(),       false, 'arrVar');
  test.equal(maybe(classVar).isEmpty(),     false, 'classVar');
  test.done();
};

exports.nonEmpty = function(test) {
  test.equal(maybe(undefinedVar).nonEmpty(), false,  'undefinedVar');
  test.equal(maybe(nullVar).nonEmpty(),      false,  'nullVar');
  test.equal(maybe(numberVar).nonEmpty(),    true,   'numberVar');
  test.equal(maybe(booleanVar).nonEmpty(),   true,   'booleanVar');
  test.equal(maybe(stringVar).nonEmpty(),    true,   'stringVar');
  test.equal(maybe(objectVar).nonEmpty(),    true,   'objectVar');
  test.equal(maybe(functionVar).nonEmpty(),  true,   'functionVar');
  test.equal(maybe(arrVar).nonEmpty(),       true,   'arrVar');
  test.equal(maybe(classVar).nonEmpty(),     true,   'classVar');
  test.done();
};

exports.getOrElse = function(test) {
  test.equal(maybe(undefinedVar).getOrElse(numberVar), numberVar,  'get undefinedVar OrElse numberVar');
  test.equal(maybe(nullVar).getOrElse(booleanVar),     booleanVar, 'get nullVar OrElse booleanVar');
  test.equal(maybe(numberVar).getOrElse(booleanVar),   numberVar,  'get numberVar OrElse booleanVar');
  test.equal(maybe(stringVar).getOrElse(numberVar),    stringVar,  'get stringVar OrElse numberVar');
  test.done();
};

exports.is = function(test) {
  test.equal(maybe(classVar).is(Date).getOrElse('It is not Date'), classVar, 'get classVar only if it is Date OrElse it is not Date');
  test.equal(maybe(nullVar).is(Object).getOrElse('Null is not an Object!'), 'Null is not an Object!', 'get classVar only if it is an Object OrElse it is not an Object');
  test.done();
};

exports.map = function(test) {
  test.equal(maybe(numberVar).map(function(i) { return i++; }).map(function(i) { return i--; }).getOrElse('undefinedVar'), numberVar, 'map function to numberVar OrElse return undefinedVar');
  test.equal(maybe(nullVar).map(function(i) { return i.toString(); }).getOrElse(stringVar), stringVar, 'map function to undefinedVar OrElse get stringVar');
  test.done();
};

reporter.run({'Maybe': exports});
