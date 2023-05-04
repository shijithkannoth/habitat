const { Before, After } = require("@wdio/cucumber-framework");


Before(async function () {
    this.config = config;
})

const config = {
    serviceBaseurl: "https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/",
};

After(async () => {
    await browser.deleteCookies()
})

AfterStep(async () => {
    browser.takeScreenshot()
})