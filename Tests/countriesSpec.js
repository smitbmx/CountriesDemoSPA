describe('Countries app', function(){
	var nameField = element(by.model('enteredName'));
	var cityField = element(by.model('enteredCapitalCity'));
	var populationField = element(by.model('enteredPopulation'));
	var addNewCountryButton = element(by.buttonText('Add new country'));
	var countryList = element.all(by.repeater('country in countries'));
	var searchField = element(by.model('query'));

	// Some Page Object
	var IndexPage = function() {
		this.nameField = element(by.model('enteredName'));
		this.cityField = element(by.model('enteredCapitalCity'));
		this.populationField = element(by.model('enteredPopulation'));
		this.addNewCountryButton = element(by.buttonText('Add new country'));

		this.addNewCountry = function(name, city, population) {
			this.nameField.sendKeys(name);
			this.cityField.sendKeys(city);
			this.populationField.sendKeys(population);
			this.addNewCountryButton.click();
		};			
	};
	
	//Set Up
	beforeEach(function(){
		browser.get('http://localhost:65411/CountriesDemoSPA/index.html#/');
	});

	it('should have a title', function(){
		expect(browser.getTitle()).toEqual('Countries - Angular.js Example');		
	});

	it('should have a possibility to add a new country', function(){
		nameField.sendKeys('My Country');
		cityField.sendKeys('My City');
		populationField.sendKeys('10000');
		addNewCountryButton.click();

		expect(countryList.last().getText()).toContain('My Country');
	});

	it('should search country by name', function(){
		searchField.sendKeys('Ukraine');
		expect(countryList.count()).toBe(1);
		expect(countryList.get(0).getText()).toContain('Ukraine');
	});

	it('should have a possibility to add a new country with a Page Object', function() {
		var indexPage = new IndexPage();
		indexPage.addNewCountry('name by page object', 'www', '222');
		expect(countryList.last().getText()).toContain('name by page object');
	});
});