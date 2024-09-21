/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/CustomersList",
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
	//	Then.onTheAppPage.iShouldSeeTheApp();
      	Then.onTheCustomersList.iShouldSeeThePageView();

		//Cleanup
		Then.iTeardownMyApp();
	});
});
