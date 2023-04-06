describe('Mata Hari', () => {
  let mataHari;
  let bar;
  let theSpy;

  beforeEach(() => {
    mataHari = {
      setBar(value, times) {
        bar = value * (times || 1);
        return bar;
      }
    };

    bar = 0;
    theSpy = jest.spyOn(mataHari, 'setBar');

    mataHari.setBar(1);
    mataHari.setBar(2, 10);
  });

  it ('can set a mock name', () => {
    theSpy.mockName('Mata Hari');
    expect(theSpy.getMockName()).toBe('Mata Hari');
  });

  it('can check if called', () => {
    expect(mataHari.setBar).toHaveBeenCalled();
    expect(mataHari.setBar.mock.instances).toHaveLength(2);
    expect(mataHari.setBar.mock.calls.length).toBeTruthy();

    // mataHari.setBar.mock.contexts ==> Array with "this" from .bind()
  });

  it('how many times', () => {
    expect(mataHari.setBar).toHaveBeenCalledTimes(2);
    expect(mataHari.setBar.mock.calls.length).toBe(2);
  });

  it('and with which parameters', () => {
    expect(mataHari.setBar).toHaveBeenCalledWith(1);
    expect(mataHari.setBar).toHaveBeenCalledWith(2, 10);

    expect(mataHari.setBar.mock.calls[0][0]).toBe(1);
    expect(mataHari.setBar.mock.calls[1][0]).toBe(2);
    expect(mataHari.setBar.mock.calls[1][1]).toBe(10);
    expect(mataHari.setBar.mock.lastCall[1]).toBe(10);

    expect(mataHari.setBar.mock.results).toHaveLength(2);
    expect(mataHari.setBar.mock.results[0].type).toBe('return'); // or 'throw'
    expect(mataHari.setBar.mock.results[0].value).toBe(1);
  });


  it('Unlike Jasmine, Jest DOES execute the function by default', () => {
    expect(bar).toBe(20);
  });

  it('Override the implementation to have the same behavior as Jasmine', () => {
    let bar2 = 0;
    const mataHariClone = {
      setBar(value, times) {
        bar2 = value * (times || 1);
        return bar2;
      }
    };

    const callApi = jest.spyOn(mataHariClone, 'setBar').mockImplementation(() => 0);
    mataHari.setBar(1);
    expect(bar2).toBe(0);
  })
});





describe('create your own spies', () => {
  it('create bare spy without implementation', () => {
    const spy = jest.fn(() => true);
    spy.mockName('test')
    expect(spy.getMockName()).toBe('test');
    expect(spy()).toBe(true);
    expect(jest.isMockFunction(spy)).toBe(true);
  });

  it('create spy object with spy functions action1 and action2', () => {
    const spyObj = {
      'action1': jest.fn(),
      'action2': jest.fn()
    };
    spyObj.action1();
    expect(spyObj.action1).toHaveBeenCalled();
    expect(spyObj.action2).not.toHaveBeenCalled();
  });

  it('create spy object with return values 15 and 18', () => {
    const spyObj = {
      action1: jest.fn(() => 15),
      action2: jest.fn(() => 18)
    };
    expect(spyObj.action1()).toBe(15);
  });
});



describe('other ways to setup a spy', () => {
  let bar;
  let foo;

  beforeEach(() => {
    foo = {
      setBar(value, times) {
        bar = value * (times || 1);
        return bar;
      }
    };
  });

  it('can actually execute the function', () => {
    jest.spyOn(foo, 'setBar');
    foo.setBar(2, 10);
    expect(bar).toBe(2 * 10);
  });

  it('or do something else', () => {
    jest.spyOn(foo, 'setBar').mockImplementation(value => value + 1);
    const calced = foo.setBar(5);
    expect(calced).toBe(6);
  });

  it('allows returning canned values', () => {
    const spie = jest.spyOn(foo, 'setBar').mockReturnValueOnce(1).mockReturnValue(2);
    const cannedOnce = foo.setBar();
    expect(cannedOnce).toBe(1);

    const cannedNext = foo.setBar();
    expect(cannedNext).toBe(2);
    expect(foo.setBar()).toBe(2);

    spie.mockClear();
    expect(foo.setBar.mock.calls).toHaveLength(0);
    expect(foo.setBar()).toBe(2);

    spie.mockReset();
    expect(foo.setBar()).toBeFalsy();
  });

  it('or just throw an error', () => {
    jest.spyOn(foo, 'setBar').mockImplementation(() => {throw new Error('quux');});
    expect(foo.setBar).toThrowError('quux');
  });

  it('can just replace a property', () => {
    const someObj = { value: 3 };
    const prop = jest.replaceProperty(someObj, 'value', 8);
    expect(someObj.value).toBe(8);

    prop.restore();
    expect(someObj.value).toBe(3);
  });

  afterEach(() => {
    // restore the spy created with spyOn & any props replaced
    // So that a mockReturnValue() in test A does not interferes
    // with test B
    jest.restoreAllMocks();
  });
});




describe('spyOnProperty is just regular spyOn in Jest', () => {
  const fooProp = {
    get value() { return 5; },
    set value(v) {}
  };

  it('can spy on getter', () => {
    jest.spyOn(fooProp, 'value', 'get').mockReturnValue(1);
    expect(fooProp.value).toBe(1);
  });

  it('and on setters', () => {
    const spiez = jest.spyOn(fooProp, 'value', 'set');
    fooProp.value = 9;
    expect(spiez).toHaveBeenCalled();

    spiez.res
  });
});
