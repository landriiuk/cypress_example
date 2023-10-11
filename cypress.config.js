const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
    },
    env: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }
  },
});
