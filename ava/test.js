import {of} from 'rxjs';
import {map} from 'rxjs/operators';


// Color Blind: https://github.com/avajs/ava/issues/413
// const colors = require('ava/lib/reporters/colors.js');
// const Chalk = require('chalk');
// colors.error = Chalk.magenta;
// colors.stack = Chalk.magenta;
// console.log(colors.error('oh boy'));



import test from 'ava';


// module.exports = {
//   log: chalk.gray,
//   title: chalk.bold,
//   error: chalk.red,
//   skip: chalk.yellow,
//   todo: chalk.blue,
//   pass: chalk.green,
//   duration: chalk.gray.dim,
//   errorSource: chalk.gray,
//   errorStack: chalk.gray,
//   stack: chalk.red,
//   information: chalk.magenta
// };



// console.log('test.meta', test.meta); // == {file: 'full-path'}


// ASSERTIONS
// Macro
function macro(t, input, expected) {
  t.is(eval(input), expected);
}

test('2 + 2 = 4', macro, '2 + 3', 5);


// Exceptions
test('throws', t => {
  const error = t.throws(() => {
    throw new TypeError('🦄');
  }, TypeError);

  t.is(error.message, '🦄');
});


test('throws async', async t => {
  await t.throwsAsync(async () => {
    throw new TypeError('oops');
  }, {instanceOf: TypeError, message: 'oops'});
  // Also: .notThrowsAsync()

  const error = await t.throwsAsync(() => {
    return Promise.reject(new TypeError('aargh'));
  });
  t.is(error.message, 'aargh');
});




// POWER-ASSERT
test.failing('enhanced assertions', t => {
  const a = /foo/;
  const b = 'bar';
  const c = 'baz';
  t.assert(a.test(b) || b === c);
});




// ADDITIONAL FEATURES
test('Promise support', t => {
  return Promise.resolve(true).then(result => {
    t.true(result);
  });
});

test('Async support', async t => {
  const value = await Promise.resolve(true);
  t.true(value);
});

test('Observable support', t => {
  t.plan(1);
  return of(1).pipe(map(() => t.pass()));
});
