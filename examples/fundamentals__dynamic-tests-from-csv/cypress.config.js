/* eslint-disable no-console */
const { defineConfig } = require('cypress')

const fs = require('fs')
const path = require('path')
const neatCSV = require('neat-csv')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    supportFile: false,
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    async setupNodeEvents (on, config) {
      // let"s load the CSV file
      // TODO: We need to get data from users.csv and turn csv format into [{}]
      // to work further with the tests

      // then set it inside the config object under the environment
      // which will make it available via Cypress.env("usersList")
      // before the start of the tests
      config.env.usersList = csv

      return config
    },
  },
})
