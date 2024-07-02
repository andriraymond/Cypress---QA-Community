module.exports = require('cypress');

module.exports = defineConfig({
  // defaultCommandTimeout: 15000,
  pageLoadTimeout: 300000,
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
