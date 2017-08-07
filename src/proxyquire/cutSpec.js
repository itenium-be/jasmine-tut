const proxyquire = require('proxyquire');

var apiStub = {};
const cut = proxyquire('./cut.js', {'./api.js': apiStub});

describe('fake the api call', function() {
  beforeEach(function() {
    this.hasRunStub = false;
    apiStub.someLongRunningOperation = () => this.hasRunStub = true;
  });

  it('should not actually call the api', function() {
    cut();
    expect(this.hasRunStub).toBe(true);
  });
});
