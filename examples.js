var maybe = require('./index');
var log   = console.log;
var line  = Array(process.stdout.columns).join('-');


log(line);
log('is null treated as empty? ', maybe(null).isEmpty())
log('is undefined treated as empty? ', maybe(undefined).isEmpty())
log('but... is numeric 0 treated as empty? ', maybe(0).isEmpty())
log('and... empty string treated as empty? ', maybe('').isEmpty())


log(line);
var definitelyUndefined = 0;
log('Now, let\'s try to get something out of undefined variable: ',
    maybe(definitelyUndefined).getOrElse('OLOLO'));


log(line);
var definitelyUndefined;
var i = 0;
log('Let\'s try to map function to numeric 0: ',
    maybe(i).map(function(i) { return 100500; }).getOrElse('Never get this value'));
// log('Original value still untouched: ', i);
log('\n');
log('And now will map to undefined varible: ',
    maybe(definitelyUndefined).map(function() { return 42; }).getOrElse('The answer was 42'));


log(line);
var date = new Date();
var MyClass =  function MyClass () {};
var myInstance = new MyClass();
log('is date really instance of Date?', maybe(date).is(Date).nonEmpty());
log('is null really instance of Object?', maybe(null).is(Object).nonEmpty());
log('is myInstance really instance of MyClass?', maybe(myInstance).is(MyClass).nonEmpty());


log(line);
var greaterThan = function (num) { return function (x) { return x > num ? x:null; }; };
var lessThan = function (num) { return function (x) { return x < num ? x:null; }; };
var definitelyUndefined;
log('All together: ', maybe(definitelyUndefined)
                        .is(Number)
                        .map(greaterThan(0))
                        .map(lessThan(42))
                        .getOrElse(9000));
