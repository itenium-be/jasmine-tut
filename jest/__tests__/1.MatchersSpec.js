describe('Jest matchers', () => {
  it('can negate any matcher with .not', () => {
    expect(1).not.toBe(0);
  });

  it('has toEqual for deep equal of Arrays/Objects', () => {
    expect({a: {a: 3}}).toEqual({a: {a: 3}});
    expect([0, {a: 1}]).toEqual([0, {a: 1}]);
  });

  it('can check numbers', () => {
    expect(5).toBeLessThan(10);
    expect(5).toBeLessThanOrEqual(5);
    expect(5).toBeGreaterThan(1);
    expect(5).toBeGreaterThanOrEqual(5);

    const precision = 3;
    expect(Math.PI).toBeCloseTo(3.142, precision);
  });

  it('has some special matchers', () => {
    expect(1).toBeTruthy();
    expect('').toBeFalsy();
    expect().toBeUndefined();
    expect(null).toBeNull();
    expect({}).toBeDefined();
    expect(NaN).toBeNaN();
  });

  describe('get funky with partial matchers', () => {
    it('partially matches Arrays', () => {
      expect([1, 2]).toHaveLength(2);
      expect(['a', {b: {}}]).toContainEqual({b: {}});
      expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 6]));
    })

    it('partially matches Objects', () => {
      expect({bar: 'baz', ack: 'yaye'}).toEqual(expect.objectContaining({bar: 'baz'}));
      expect({foo: 'foobarbaz'}).toEqual({foo: expect.stringMatching('baz$')});
    })

    it('partially matches strings', () => {
      expect('the foobarbaz?').toContain('baz');
      expect('the foobarbaz?').toEqual(expect.stringContaining('baz'));
    })

    it('can also use regex', () => {
      expect('some bar').toMatch(/bar$/);
    })
  });

  it('can check for errors', () => {
    const foo = () => {
      throw new TypeError('foo bar baz');
    };

    expect(foo).toThrow();

    expect(foo).toThrowError('foo bar baz'); // Error message must be exact match in order to pass
    expect(foo).toThrowError(/bar/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, 'foo bar baz');
  });

  it('expect.any', () => {
    expect({}).toEqual(expect.any(Object));
    expect(12).toEqual(expect.any(Number));
    expect(true).toEqual(expect.any(Boolean));
    expect(new Date()).toEqual(expect.any(Date));
    expect('this').toEqual(expect.any(String));
    expect([]).toEqual(expect.any(Array));
  });

  it('expect.anything', () => {
    expect(1).toEqual(expect.anything());
  });
});
