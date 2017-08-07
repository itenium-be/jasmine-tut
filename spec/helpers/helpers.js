// Loaded by /spec/support/jasmine.json as "helpers"
// Covered by CustomizationSpec.js

beforeEach(function() {
  // Custom equality testers and matchers
  const myExternalCustomEquality = function(first, second) {
    if (first === 'wuuk' && typeof second === 'number') {
      return second === 42;
    }
  };

  jasmine.addCustomEqualityTester(myExternalCustomEquality);
  //jasmine.addMatchers(customMatchers);



  // Convenience fuctions, available in it, beforeEach, etc
  this.yourHelper = function() {
    return 'as defined in spec/helpers/helpers.js';
  };



  // Mock global variables in required modules
  jasmine.getGlobal().t = t => t;
});
