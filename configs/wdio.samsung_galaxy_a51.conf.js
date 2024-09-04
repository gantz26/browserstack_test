import "dotenv/config";

export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
  
    updateJob: false,
    specs: [
      '../test/specs/**.e2e.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "Second Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'second_test',
      device: 'Samsung Galaxy A51',
      os_version: "10.0",
      app: process.env.BROWSERSTACK_APP_URL,
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    reporters: [
      [
        "allure",
        {
          outputDir: "allure-results"
        }
      ]
    ],
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
  };