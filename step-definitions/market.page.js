const { Given, When, Then, World } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const fetch = require('node-fetch');

const MarketPage = require('../pageobjects/marketpage');
let map_price = []


When(/^I select the continuous from the filter and validate the map changes$/, async () => {
    await MarketPage.continuous.click()
    var difference = await browser.checkScreen('Continuous_Filter', {})
    // var difference = await browser.checkElement(await $('svg#calque_1'), 'Continuous_Filter', { /* some options */ })
    expect(await difference).to.not.equal(0);


});

When(/^I select auction capacity from the filter and validate the map changes$/, async () => {
    await MarketPage.capacity_auction.click()
    await browser.pause(3000)
    var difference = await browser.checkScreen('Auction_Capacity', {})
    // var difference = await browser.checkElement(await $('svg#calque_1'), 'Auction_Capacity', { /* some options */ })
    expect(await difference).to.not.equal(0);

});

When(/^I select Guarantees of Origin from the filter and validate the map changes$/, async () => {
    await MarketPage.guarantees_Origin.click()
    var difference = await browser.checkScreen('Guarantees', {})
    // var difference = await browser.checkElement(await $('svg#calque_1'), 'Guarantees', { /* some options */ })
    expect(await difference).to.not.equal(0);
});

Then(/^I select the hours and compare the map price is updated$/, async (table) => {
    await browser.pause(3000)
    await table.raw().forEach(async (data) => {
        let filter_button = await $(".//a[@data-value='" + data.toString() + "']").click()
        await filter_button.click()
        await browser.pause(5000)
        var map_price_updated = []
        await MarketPage.map_value.forEach(async (element) => {
            map_price_updated.push(await element.getText())
        })
        expect(map_price).to.not.equal(map_price_updated)
    })

});

When(/^I the store the map price$/, async () => {
    await MarketPage.map_value.forEach(async (element) => {
        map_price.push(await element.getText())
    })

});

When(/^I set the base map reference$/, async () => {
    await browser.saveScreen('Baseline_Map', {});
    // await browser.saveElement(await $('svg#calque_1'), 'firstButtonElement1', { /* some options */ });
});

Then(/^I select the hours (\w+) and compare the map price is updated$/, async (filter) => {
    await $(".//a[@data-value='" + filter + "']").click()
    var map_price_updated = []
    await MarketPage.map_value.forEach(async (element) => {
        map_price_updated.push(await element.getText())
    })
    expect(map_price).to.not.equal(map_price_updated)
});




