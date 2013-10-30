var maybe = require('./index');
var log   = console.log;
var line  = Array(process.stdout.columns).join('-');


log(line);
log('is null treated as empty? ', maybe(null).isEmpty())
log('is undefined treated as empty? ', maybe(undefined).isEmpty())
log('but... is numeric 0 treated as empty? ', maybe(0).isEmpty())
log('and... empty string treated as empty? ', maybe('').isEmpty())


log(line);
var definitelyUndefined;
log('Now, let\'s try to get something out of undefined variable: ', maybe(definitelyUndefined).getOrElse('default value'));


log(line);
var definitelyUndefined;
var i = 0;
log('Let\'s try to map function to numeric 0: ', maybe(i).map(function() { return 100500; }).getOrElse('Never get this value'));
log('Original value still untouched: ', i);
log('\n');
log('And now will map to undefined varible: ', maybe(definitelyUndefined).map(function() { return 42; }).getOrElse('The answer was 42'));


log(line);
var date = new Date();
var MyClass =  function MyClass () {};
var myInstance = new MyClass();
log('is date really instance of Date?', maybe(date).is(Date).nonEmpty());
log('is null really instance of Object?', maybe(null).is(Object).nonEmpty());
log('is myInstance really instance of MyClass?', maybe(myInstance).is(MyClass).nonEmpty());


log(line);
var numeric = 42;
var definitelyUndefined;
log('All together: ', maybe(numeric)
                        .is(Number)
                        .map(function(n) { return n < 9000 ? n:null; })
                        .map(function(n) { return n > 0 ? n:null; })
                        .getOrElse(100500));
