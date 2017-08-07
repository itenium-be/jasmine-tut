// Loaded from CustomizationSpec.js

module.exports = {
  aGlobalUsingFunction: function(val) {
    // During Jasmine execution, the global t
    // is provided in spec/helpers/helpers.js
    return t(val);
  }
};
