const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Symphony: Publicapis.org API Test Report.",
    reportFilename: "Test Report [datetime]",
    timestamp: "yyyy, mm, dd, HH:MM",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    chromeWebSecurity: false,
    video: false,
    baseUrl: "https://api.publicapis.org",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
