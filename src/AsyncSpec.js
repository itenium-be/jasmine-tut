const customTimeout = 1000;

describe('async', () => {
  it('has a default timeout of 5000ms', () => {
    expect(jasmine.DEFAULT_TIMEOUT_INTERVAL).toBe(5000);
  });

  beforeAll(done => {
    // The same construct can be used for
    // beforeEach, afterEach and afterAll
    done();
  }, customTimeout);

  it('has an optional "done" parameter', done => {
    Promise.resolve()
      .then(() => expect(true).toBeTruthy())
      .then(done)
      .catch(done.fail);
  });

  xit('can fail with a specific message', done => {
    Promise.reject().catch(done.fail.bind(this, 'done.fail("with your error message")'));
  }, customTimeout);


  it('async/awaits', async () => {
    const pie = await Promise.resolve(3.14);
    expect(pie).toBe(3.14);
  });
});


describe('time travel', () => {
  beforeEach(() => jasmine.clock().install());


  it('the one inventing time travel may find himself to be the last one to invent time travel', () => {
    var timePassed = 0;
    setTimeout(() => {
      timePassed += 100;
    }, 100);

    expect(timePassed).toBe(0);

    jasmine.clock().tick(100);

    expect(timePassed).toBe(100);
  });


  it('can hijack new Date', () => {
    const baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);

    jasmine.clock().tick(50);
    expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
  });


  afterEach(() => jasmine.clock().uninstall());
});


describe('expectAsync', () => {
  it('can check for resolved', () => {
    const pie = Promise.resolve(3.14);
    expectAsync(pie).toBeResolved();
    return expectAsync(pie).toBeResolvedTo(3.14);
  });

  it('can check for rejected', () => {
    const pie = Promise.reject('reasons');
    expectAsync(pie).toBeRejected();
    expectAsync(pie).toBeRejectedWith('reasons');
  });

  it('can pass context - which will show on failure', () => {
    const pie = Promise.resolve(42);
    expectAsync(pie).withContext('test').toBeResolved();
  });
});
