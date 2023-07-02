const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: false,
    specPattern: '../e2e/*.e2e.js',
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
