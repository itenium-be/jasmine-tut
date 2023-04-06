// jest.setTimeout(5000) // default timeout: 5s

describe('async', () => {
  test('has an optional "done" parameter', done => {
    Promise.resolve()
      .then(() => expect(true).toBeTruthy())
      .then(done)
      // .then(() => Promise.reject())
      // .catch(() => done('That didn't work'));
  });

  xit('can fail with a specific message', done => {
    Promise.reject().catch(err => done(err || 'big fail'));
  });


  it('async/awaits', async () => {
    const pie = await Promise.resolve(3.14);
    expect(pie).toBe(3.14);
  });
});


describe('time travel', () => {
  beforeEach(() => jest.useFakeTimers());

  it('the one inventing time travel may find himself to be the last one to invent time travel', () => {
    var timePassed = 0;
    setTimeout(() => {
      timePassed += 100;
    }, 100);

    expect(timePassed).toBe(0);
    jest.advanceTimersByTime(100); // or: jest.advanceTimersByTimeAsync()
    expect(timePassed).toBe(100);
  });

  it('can hijack new Date', () => {
    const baseTime = new Date(2013, 9, 23);
    jest.setSystemTime(baseTime);

    jest.advanceTimersByTime(50);
    expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);

    const realNow = jest.getRealSystemTime();
    expect(realNow).not.toEqual(baseTime.getTime() + 50)
  });

  it('can manipulate time in other ways', async () => {
    let hasRun = false;
    setTimeout(() => hasRun = true, 1000);
    expect(hasRun).toBe(false);

    await jest.runAllTimersAsync(); // or: jest.runAllTimers()
    expect(hasRun).toBe(true);
  });

  afterEach(() => jest.useRealTimers());
});



describe('expectAsync is just expect in Jest', () => {
  it('can check for resolved', async () => {
    const pie = Promise.resolve(3.14);
    return expect(pie).resolves.toBe(3.14);
  });

  it('can check for rejected', async () => {
    const pie = Promise.reject('reasons');
    return expect(pie).rejects.toMatch('reasons');
  });
});


describe('async mocks', () => {
  it('can resolve', async () => {
    const asyncMock = jest.fn().mockResolvedValue(43); // also mockResolvedValueOnce
    const result = await asyncMock();
    expect(result).toBe(43)
  });

  it('can reject', async () => {
    const asyncMock = jest.fn().mockRejectedValue(43); // also mockRejectedValueOnce
    // This is the same as:
    // jest.fn().mockImplementation(() => Promise.reject(43));

    expect(asyncMock).rejects.toBe(43);
  });
})
