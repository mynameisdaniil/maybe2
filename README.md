(Just to get this https://gist.github.com/andyhd/1618403 as a module,  with a little bit of sugar). So the following constructions are now possible:
```javascript
var greaterThan = function (num) { return function (x) { return x > num ? x:null; }; };
var lessThan = function (num) { return function (x) { return x < num ? x:null; }; };
var definitelyUndefined;
log('All together: ', maybe(definitelyUndefined)
                        .is(Number)
                        .map(greaterThan(0))
                        .map(lessThan(42))
                        .getOrElse(9000));
```
Take a look at the example.js or test.js for more info.
(All glory goes to @andyhd)
