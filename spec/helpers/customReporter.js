// https://github.com/onury/jasmine-console-reporter
var JasmineConsoleReporter = require('jasmine-console-reporter');
var myReporter = new JasmineConsoleReporter({
  colors: 1,           // (0|false)|(1|true)|2
  cleanStack: 1,       // (0|false)|(1|true)|2|3
  verbosity: 4,        // (0|false)|1|2|(3|true)|4
  listStyle: 'indent', // "flat"|"indent"
  activity: false
});
jasmine.getEnv().addReporter(myReporter);
