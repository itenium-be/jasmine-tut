// TODO: describe('Custom reports', function() {});
// jasmine.Env.addReporter()
// https://jasmine.github.io/edge/custom_reporter.html

describe('Custom EqualityTesters', function() {
  beforeEach(function() {
    const customEquality = function(first, second) {
      if (first === 'everything' && typeof second === 'number') {
        // return true or false as final result of .toEqual
        return second === 42;
      }
      // return undefined to let the next equality tester give it a shot
      return undefined;
    };

    jasmine.addCustomEqualityTester(customEquality);
  });

  it('should use customEquality', function() {
    expect('everything').toEqual(42);
  });

  it('should not use customEquality', function() {
    expect('something').not.toEqual(42);
  });

  // See CustomMatchSpec for an example of
  // .toHaveBeenCalledWith(customEquality)
});




describe('Custom Matchers', function() {
  beforeEach(function() {
    const customMatchers = {
      toBeDivisibleBy: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            var result = {pass: (actual % expected) === 0};
            if (!result.pass) {
              // failure message
              result.message = `${actual} is not divisable by ${expected} (mod: ${actual % expected})`;
            } else {
              // failure message - when .not.toBeDivisibleBy() fails
              // if a negativeCompare function is provided, this message will never be displayed
              result.message = `${actual} is divisable by ${expected} (mod: ${actual % expected})`;
            }
            return result;
          },
          // Optional function when you need more control for the .not case
          //negativeCompare: function(actual, expected) {}
        };
      }
    };

    jasmine.addMatchers(customMatchers);
  });

  it('is divisible by 2', function() {
    // The parameter names of the compare function
    const actual = 14;
    const expected = 2;
    expect(actual).toBeDivisibleBy(expected);
  });
});




describe('Environment', function() {
  describe('Convenience stuff loaded by spec/helpers/helpers.js', function() {
    it('should use myExternalCustomEquality', function() {
      expect('wuuk').toEqual(42);
    });


    it('can provide helper functions', function() {
      expect(this.yourHelper()).toBe('as defined in spec/helpers/helpers.js');
    });


    it('can set global variables on jasmine.getGlobal()', function() {
      const globalz = require('./global.js');
      //global.js:
      // module.exports = {aGlobalUsingFunction: val => t(val)};
      //helpers.js:
      // jasmine.getGlobal().t = t => t;
      expect(globalz.aGlobalUsingFunction('ouch')).toBe('ouch');
    });
  });


  describe('jasmine global has some configs', function() {
    it('has default timeout of 5000ms', function() {
      expect(jasmine.DEFAULT_TIMEOUT_INTERVAL).toBe(5000);
    });

    it('can change the pretty printing limits', function() {
      expect(jasmine.MAX_PRETTY_PRINT_ARRAY_LENGTH).toBe(100);
      expect(jasmine.MAX_PRETTY_PRINT_DEPTH).toBe(40);
    });

    it('has its own jasmine.getEnv()', function() {
      expect(Object.keys(jasmine.getEnv())).toContain('beforeEach');
    });
  });
});