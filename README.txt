1. Need install Protractor globally (use npm):

npm install -g protractor

Try running protractor --version to make sure it's working

2. webdriver-manager is a hepler tool to easily get an instance of a Selenium Server running.
use it to download the necessary binaries with:

webdriver-manager update

Now start up a server with:

webdriver-manager start

This will start up a Selenium Server and will output a bunch of info logs.
Your Protractor test will send requests to this server to control a local browser. 

3. Run tests : protractor <path to config.js file>