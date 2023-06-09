const { commands } = require("commander");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bugbank.netlify.app/'
    
  },
  setupNodeEvents(on, config){
    require("cypress-localStorage-commands/pluggin")(on, config);
    return config;
  }
});
