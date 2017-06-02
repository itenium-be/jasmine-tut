it("'s async/await, it's so 2017!", done => {
  (async () => {
    const pie = await Promise.resolve(3.14);
    expect(pie).toBeCloseTo(3, 0);
    done();
  })().catch(done.fail);
});
