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

    expect.addEqualityTesters([customEquality])
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





const toBeDivisibleBy = function (actual, expected) {
  if (actual % expected !== 0) {
    return {
      message: () => {
        const prettyActual = this.utils.printReceived(actual);
        const prettyExpected = this.utils.printExpected(expected);
        return `${prettyActual} is not divisable by ${prettyExpected} (mod: ${actual % expected})`
      },
      pass: false,
    }
  } else {
    return {
      message: () => `${actual} is divisable by ${expected} (mod: ${actual % expected})`,
      pass: true,
    }
  }
}


expect.extend({
  toBeDivisibleBy,
});


describe('Custom Matchers', function() {
  it('is divisible by 2', function() {
    expect(100).toBeDivisibleBy(2);
    expect(101).not.toBeDivisibleBy(2);
  });
});




describe('Environment', function() {
  describe('Convenience stuff loaded by setupJest.ts', function() {
    it ('recognizes globals', () => {
      expect(__DEV__).toBe(true);
      expect(global.__DEV__).toBe(true);
    })

    it('should use myExternalCustomEquality', function() {
      expect('wuuk').toEqual(42);
    });

    it('can set global variables in setupJest.ts', function() {
      expect(t('ouch')).toBe('ouch');
    });
  });
});
