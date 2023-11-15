const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
    },
    pageLoadTimeout: 15000,
    env: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }
  },
});
