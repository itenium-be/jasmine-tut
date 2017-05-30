fdescribe('only my its will run', () => {
  it('which is me', () => {});
  it('and me', () => {});
  xit('but not me', () => {});
});

xit('I will not run, even if the fdescribe above is removed', () => {});

it('oh noes', () => {
  expect(false).toBeTruthy();
});
