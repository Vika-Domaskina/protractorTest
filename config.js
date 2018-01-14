//This configuration tells Protractor where your test files are,
//and where to talk to your Selenium Server (seleniumAddress)
//It specifies that we will be using Jasmine for the test framework.
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  getPageTimeout: 120000,
}