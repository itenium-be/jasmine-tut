// https://github.com/bcaudan/jasmine-spec-reporter
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    // add jasmine-spec-reporter
    spec: {
      displayPending: true,
    },
    colors: {
      // successful: 'green',
      failed: 'magenta',
      // pending: 'cyan',
      prettyStacktraceError: 'magenta',
    },
    summary: {
      displayDuration: true,
    },
  })
);



// https://github.com/larrymyers/jasmine-reporters
// JUnitXmlReporter, NUnitXmlReporter, TapReporter, ...
// const reporters = require('jasmine-reporters');
// const terminalReporter = new reporters.TerminalReporter({
//   color: true,
//   showStack: true,
//   verbosity: 3, //0 | 1 | 2 | 3
// });
// jasmine.getEnv().addReporter(terminalReporter);




// https://github.com/onury/jasmine-console-reporter
// --> not updated in 4 years...
// const JasmineConsoleReporter = require('jasmine-console-reporter');
// const myReporter = new JasmineConsoleReporter({
//   colors: 1,           // (0|false)|(1|true)|2
//   cleanStack: 1,       // (0|false)|(1|true)|2|3
//   verbosity: 4,        // (0|false)|1|2|(3|true)|4
//   listStyle: 'indent', // "flat"|"indent"
//   timeUnit: 'ms',      // "ms"|"ns"|"s"
//   timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
//   activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
//   emoji: true,
//   beep: true,
// });
// jasmine.getEnv().clearReporters();
// jasmine.getEnv().addReporter(myReporter);
