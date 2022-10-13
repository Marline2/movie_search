const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '46yncd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/**/*.{test, cy}.{js,jsx,ts,tsx}',
    baseUrl:"http://localhost:8080",
    viewportWidth:1400,
    viewportHeight:800
  },
});
