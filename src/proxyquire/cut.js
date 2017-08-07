const webApi = require('./api.js');
module.exports = function() {
  webApi.someLongRunningOperation();
};
