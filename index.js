var Type = require('type-of-is');

module.exports = function maybe(value) {
  function isEmpty() { return value === undefined || value === null; }
  function nonEmpty() { return !isEmpty(); }
  function is(type) { return Type.is(value, type); }
  var obj = {
    map: function (f) { return isEmpty() ? obj : maybe(f(value)); },
    getOrElse: function (n) { return isEmpty() ? n : value; },
    is: function (type) { return is(type) ? obj : maybe(); },
    isEmpty: isEmpty,
    nonEmpty: nonEmpty,
  };
  return obj;
};
