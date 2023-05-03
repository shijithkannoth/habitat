# POC for GUI & API Automation

This automation framework can be used for frontend GUI automation using webdriverio and backend API using node-fetch

## Pre- Requisites 

brew must be installed 

[Brew Installation reference ](https://brew.sh/)

### SetUp for Node and Allure

```
brew install node
npm install -g allure-commandline  (required java8 or above)
```

## Setting up the Framework

### Step 1
#### Run the npm install on the project director (package.json)
```
npm install
```
### Executing the Test

```
npm run wdio



npm run wdio -- --cucumberOpts.tagExpression='@links' 

```
#### to execute specific test case using the tags

```
npm run wdio -- --cucumberOpts.tagExpression='@links' 

```

### To Generate Report

```
allure serve (Report Directory)
{allure serve allure-results/}

```






