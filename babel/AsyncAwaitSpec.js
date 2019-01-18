// These tests run only with `npm run test:babel`
it("'s async/await, it's so 2017!", async done => {
  const pie = await Promise.resolve(3.14);
  expect(pie).toBeCloseTo(3, 0);
  done();
});

it('can catch reject', async done => {
  try {
    await Promise.reject('reasons');
    done.fail();
  } catch (e) {
    done();
  }
});

it('alternate async/await syntax', done => {
  (async () => {
    const pie = await Promise.resolve(3.14);
    expect(pie).toBeCloseTo(3, 0);
    done();
  })().catch(done.fail);
});
