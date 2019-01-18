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
});
