sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/CustomersList"
], function (opaTest) {
	"use strict";

QUnit.module("Customers List Journey");
opaTest("Should see the initial page of the app", function(Given, When, Then){
    //Arrangements
    Given.iStartMyApp();
    
    //Assertions
    Then.onTheCustomersList.iShouldSeeTheButton();
    Then.onTheCustomersList.iShouldSeeTheTable();
    Then.onTheCustomersList.iShouldSeeTheCreateButton();

    //Cleanup
    Then.iTeardownMyApp();
});

opaTest("Should navigate to create new customer", function(Given, When, Then){
    //Arrangements
    Given.iStartMyApp();
    
    //Actions
  //  When.onTheCustomersList.iPressCreate();
    
    //Assertions
    Then.onTheCustomersList.iShouldSeeTheButton();

    //Cleanup
    Then.iTeardownMyApp();
});
});