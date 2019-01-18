# Jasmine Tutorial

[Code for bliki series on Jasmine][bliki-entry]

# Content

Folders:  
- spec:
	- helpers: helpers, globals, loading of custom configuration, equality testers and reports
	- support: example `jasmine.json` files
- src
	- `*.js`: the suite with all sorts of Jasmine functionality tests
	- proxyquire: plugin examples
- babel: do a Babel transpilation before running the tests

# Running the tests

```
npm install

# Run once
npm t

# Watch
npm run test:w

# Run tests with Babel compilation
npm run babel

# Watch for changes
npm run babel:w
```

[bliki-entry]: https://itenium.be/blog/javascript/javascript-testing-jasmine-syntax
