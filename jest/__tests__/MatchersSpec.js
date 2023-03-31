describe('simple matchers', () => {
  it('(not) toBe & toEqual', () => {
    expect(1).not.toBe(0);
    expect({a: {a: 3}}).toEqual({a: {a: 3}});
    expect([0, {a: 1}]).toEqual([0, {a: 1}]);
  });

  it('knows about regexes', () => {
    expect('some bar').toMatch(/bar$/);
    expect('some bar').toMatch(/\sbar/);
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

    // var el = new HTMLDivElement()
    // el.className = 'foo bar baz';
    // expect(el).toHaveClass('bar');
  });

  it('gets funky with partial matchers', () => {
    expect(['a', {b: {}}]).toContainEqual({b: {}});
    expect('some string').toContain('some');

    expect({bar: 'baz', ack: 'yaye'}).toEqual(expect.objectContaining({bar: 'baz'}));
    expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 6]));
    expect({foo: 'foobarbaz'}).toEqual({foo: expect.stringMatching('baz$')});
    expect('the foobarbaz?').toContain('baz');
    expect('the foobarbaz?').toEqual(expect.stringContaining('baz'));

    // Jasmine stuff without Jest counterparts:
    // expect([1, 2, 3]).toEqual(jasmine.arrayWithExactContents([1, 2, 3]));
    // expect([]).toEqual(expect.empty());
    // expect([1]).toEqual(jasmine.notEmpty());

    // expect(true).toEqual(jasmine.truthy());
    // expect(0).toEqual(jasmine.falsy());
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

    // expect(foo).toThrowMatching(err => err.message.includes('baz'));
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
