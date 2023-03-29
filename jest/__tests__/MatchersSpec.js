describe('simple matchers', () => {
  it('(not) toBe & toEqual', () => {
    expect(1).not.toBe(0);
    expect({a: {a: 3}}).toEqual({a: {a: 3}});
    expect([0, {a: 1}]).toEqual([0, {a: 1}]);
  });

  it('knows about regexes', () => {
    expect('some bar').toMatch(/bar$/);
    expect('some bar').toMatch('bar'); // ATTN: can't do '\\sbar' for regex like jasmine
  });

  it('can check numbers', () => {
    expect(5).toBeLessThan(10); // .toBeLessThanOrEqual(5);
    expect(5).toBeGreaterThan(1); // .toBeGreaterThanOrEqual(5);

    const precision = 3;
    expect(Math.PI).toBeCloseTo(3.142, precision);
  });

  it('has some special matchers', () => {
    expect(1).toBeTruthy();
    expect('').toBeFalsy();
    expect().toBeUndefined();
    // .toBeNull(); .toBeDefined(); .toBeNaN();
    // .toBeNegativeInfinity(); .toBePositiveInfinity(); // ATTN: Jest doesn't have this
    // .toHaveClass(domEl): contains the class // ATTN: Jest doesn't have this
    // .withContext('show this on failure'); // ATTN: Jest doesn't have this
  });

  it('gets funky with partial matchers', () => {
    expect(['a', {b: {}}]).toContainEqual({b: {}}); // ATTN: was toContain for Jasmine
    expect(['a', 'b']).toContain('b'); // ATTN: this does work in Jest
    expect('some string').toContain('some');

    // expect({bar: 'baz', ack: 'yaye'}).toEqual(jasmine.objectContaining({bar: 'baz'}));
    // expect([1, 2, 3]).not.toEqual(jasmine.arrayContaining([1, 6]));
    // expect({foo: 'foobarbaz'}).toEqual({foo: jasmine.stringMatching('baz$')});
    // expect('the foobarbaz?').toEqual(jasmine.stringContaining('baz'));

    // jasmine.arrayWithExactContents()
    // .empty(); .notEmpty();
    // .truthy(); .falsy();
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

    // expect(foo).toThrowMatching(err => err.message.includes('baz')); // TODO: jest doesn't have this
  });

  // it('jasmine.any', () => {
  //   expect({}).toEqual(jasmine.any(Object));
  //   expect(12).toEqual(jasmine.any(Number));
  //   expect(true).toEqual(jasmine.any(Boolean));
  //   expect(new Date()).toEqual(jasmine.any(Date));
  //   expect('this').toEqual(jasmine.any(String));
  //   expect([]).toEqual(jasmine.any(Array));
  // });

  // it('jasmine.anything', () => {
  //   expect(1).toEqual(jasmine.anything());
  // });
});
