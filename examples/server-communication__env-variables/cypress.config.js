/* eslint-disable no-console */
const { defineConfig } = require('cypress')

// load the environment variables from the local .env file
// TODO: How to use env in cypress?

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = defineConfig({
  env: {
    'my-var': 'ok',
  },
  fixturesFolder: false,
  e2e: {
    supportFile: false,
    setupNodeEvents (on, config) {
      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      // TODO: Use cypress config to get values from env.

      // you could extract only specific variables
      // and rename them if necessary

      console.log('extended config.env with process.env.{FOO, BAR, USER_NAME}')
    },
  },
})
