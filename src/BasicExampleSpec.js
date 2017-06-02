describe('basic example', () => {
  beforeEach(() => {
    this.result = 1;
  });

  it('can hardly fail', () => {
    // toBe() uses ===
    expect(this.result).toBe(1);

    // For primitive types, toEqual
    // behaves the same way as toBe
    // toEqual goes further however
    // by deeply comparing objects.
    expect({a: {}}).toEqual({a: {}});
    expect([0, {a: 1}]).toEqual([0, {a: 1}]);
  });

  afterAll(() => {});
});
