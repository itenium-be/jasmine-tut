describe('basic example', () => {
  beforeEach(() => {
    this.result = 1;
  });

  // Screenshot area:
  // it("can't get more basic than this", () => {
  //   expect(1).toBe(1);
  // });
  // it('oh no, you donkey', () => {
  //   expect(1).toBe(2);
  // });

  it('can hardly fail', () => {
    expect.hasAssertions();
    expect.assertions(3);

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
