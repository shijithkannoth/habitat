const { join } = require('path');

exports.config = {
    require: ['@babel/register'],
    runner: 'local',
    specs: [
        '../habitat/features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true

    }],
    logLevel: 'info',
    bail: 0,

    baseUrl: 'https://www.epexspot.com/en/market-data',
    baseServiceUrl: 'https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    services: [
        ['chromedriver'],
        ['image-comparison',
            // The options
            {
                // Some options, see the docs for more
                baselineFolder: join(process.cwd(), './tests/'),
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: join(process.cwd(), '.tmp/'),
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
                ignoreNothing: true  // Without this option, it errors out only when mismatch is above 1.23%(by default)
                // ... more options
            }],
    ],

    framework: 'cucumber',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],


    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['../habitat/step-definitions/*.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },

}
