"use strict";

describe('Testing "booking.com"', () => {
	beforeAll((done) => {
		browser.waitForAngularEnabled(false);
		browser.get("https://www.booking.com")
		.then(done).catch(err => done.fail("Site not found" + err));
	});

	it('Find deals!', (done) => {
		let elem = element.all(by.id('ss')).first();
		elem.sendKeys('New York');
		console.log("Typed 'New York!'");
		let searchCheckIn = element.all(by.className('sb-dates__col --checkin-field')).first();
		let checkIn = searchCheckIn.element(by.className('sb-date-field__display'));
		checkIn.click();
		let calendarCheckIn = element(by.className('c2-day c2-day-s-today')).element(by.className('c2-day-inner'));
		let dateOut;
		calendarCheckIn.getText().then((text) => {
			dateOut = text;
			console.log('Today: ' + dateOut);
			return parseInt(dateOut) + 7;
		})
		.then((res) => {
			//console.log("blabla first then : " + res);
			calendarCheckIn.click();
			return res;
		})
		.then((res) => {
			let searchCheckOut = element.all(by.className('sb-dates__col --checkout-field')).first();
			let checkOut = searchCheckOut.element(by.className('sb-date-field__display'));
			checkOut.click();
			let calendarCheckOut = element(by.className('c2-day c2-day-s-disabled c2-day-s-today'))
			let xpathDateOut = '//div[@class="sb-dates__col --checkout-field"]//span[@class="c2-day-inner" and .="' + res + '"]';
			return xpathDateOut;
		})
		.then((xpath) => {
			element.all(by.xpath(xpath+'/parent::td')).first().click();
		});
		let searchButton = element.all(by.className('sb-searchbox__button  ')).first().click()
		.then(() => {
			let searchResult = browser.wait(function() {
    			return element(by.className("destination-sr-header__col destination-sr-header__content")).isPresent();
    		}, 7000);
    		return searchResult;		
		})
		.then((res => expect(res).toBeTruthy("Result not found")))
		.then(done).catch(err => done.fail("Site not found" + err));
	});

	it("Find 'New York' in results", (done) => {
		
		.then(done).catch(err => done.fail("Result not found" + err));
	})
})