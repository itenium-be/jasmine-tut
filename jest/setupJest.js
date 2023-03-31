global.__DEV__ = true;

global.t = t => t;

const myExternalCustomEquality = function(first, second) {
  if (first === 'wuuk' && typeof second === 'number') {
    return second === 42;
  }
};

expect.addEqualityTesters([myExternalCustomEquality]);
