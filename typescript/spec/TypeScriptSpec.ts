describe('TypeScript example', () => {
  it('works', () => {
    const expectedResult: number = 1;
    const fn = (): number => 1;

    expect(fn()).toBe(expectedResult);
  });
});
