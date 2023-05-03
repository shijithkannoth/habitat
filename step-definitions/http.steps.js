const { Given, When, Then, World } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const fetch = require('node-fetch');
const conf = require('../wdio.conf').config

let responseBody

function getRequestHeader() {
    this;
    let reqOptions;
    reqOptions = {
        headers: {
            "Content-Type": "application/json",
        }
    };
    return reqOptions
}

When(/^I HTTP (OPTIONS|GET|HEAD|PATCH|POST|PUT|DELETE|) (.*) from my service$/, async (method, path) => {
    let request = conf.baseServiceUrl + path
    await fetch(request).then(async (resp) => {
        responseBody = resp
    })


});

Then(/^I should be able to see the response with status (.*) and (.*) in (.*)$/, async (status_code, message, path) => {
    expect(parseInt(status_code)).equal(responseBody.status)
    const response_1 = JSON.parse(await responseBody.text())
    const resObj = new Map(Object.entries(await response_1))
    console.log('response status', await resObj.get("errorType"))
    expect(message).equal(await resObj.get(path))

})