// Loaded by /spec/support/jasmine.json as "helpers"
// Covered by CustomizationSpec.js

beforeEach(function() {
  // Convenience fuctions, available in it, beforeEach, etc
  this.yourHelper = function() {
    return 'as defined in spec/helpers/helpers.js';
  };



  // Mock global variables in required modules
  jasmine.getGlobal().t = t => t;
});
