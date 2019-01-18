// https://jasmine.github.io/api/edge/Configuration.html
jasmine.getEnv().configure({
  failFast: false,
  hideDisabled: false,
  oneFailurePerSpec: false,
  random: true,
  seed: null, // null=random. Or use func: () => 4547;
  // specFilter: spec => spec.description.includes('custom'),
});

// Get current configuration:
// jasmine.getEnv().configuration()
