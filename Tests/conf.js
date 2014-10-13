exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['countriesSpec.js'],
	capabilities: {
		browserName: 'chrome',
		options: '--disable-web-security'
	},
	onPrepare: function() {
	require('jasmine-reporters');
	jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('results/', true, true));
   }
}