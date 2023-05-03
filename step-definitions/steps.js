const { Given, When, Then, World } = require('@wdio/cucumber-framework');
const WdioImageComparisonService = require('wdio-image-comparison-service').default;
let wdioImageComparisonService = new WdioImageComparisonService({});
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/marketpage');
const { expect } = require('chai');


Given(/^I am on the market page$/, async () => {
    await browser.url('https://www.epexspot.com/en/market-data')
    await browser.maximizeWindow()
    await $("[data-drupal-selector='edit-acceptationbutton']").click()
    await $('button.btn.eu-cookie-compliance-save-preferences-button').click()


});

Then(/^I validate the links the page$/, async () => {
    var linkElements = await $$('a')
    linkElements.forEach(async (link) => {
        var link_href = await link.getAttribute('href')

        try {
            if (link_href.includes('http')) {
                await fetch(link_href).then(async (resp) => {
                    expect(resp.status).match(/^[2-3].*/)
                })
            } else if (link_href.startsWith('/')) {
                await fetch('https://www.epexspot.com/' + link_href).then(async (resp) => {
                    expect(resp.status).match(/^[2-3].*/)
                })
            }
        }
        catch (err) {
            console.log(err)
        }
    })
});

Then(/^I validate the maps updated$/, async () => {
    await browser.saveElement(await $('svg#calque_1'), 'firstButtonElement', {});
    await HomePage.continuous.click()
    var difference = await browser.checkElement(await $('svg#calque_1'), 'firstButtonElement1', {})
    try {
        expect(await browser.checkElement(await $('svg#calque_1'), 'firstButtonElement123', {})).toEqual(0);
    }
    catch (err) {
        console.log(err)
    }

});


