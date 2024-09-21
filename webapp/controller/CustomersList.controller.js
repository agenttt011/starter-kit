sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomersList", {
        onInit: function () {

        },
       onCustomerPress: function(oEvent){
           debugger
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CustomerDetails", {
                CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
            })
       },
       createCustomer: function(oEvent){
             
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("CreateCustomer")
    },
        onPerformance: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("EmployeeList", {
            });
        },
        handleLiveChange : function(oEvent){
            // build filter array
            
                        var aFilter = null;
                        var sQuery = oEvent.getParameter("query");
            
                        if (sQuery) {
                          //  aFilter.push(new Filter("CompanyName", FilterOperator.Contains, sQuery));
                            aFilter = new Filter([
                                  new Filter("CompanyName", FilterOperator.Contains, sQuery),
                                  new Filter("Country", FilterOperator.Contains, sQuery)
                                ],
                                false
                            )
                        }
                        
                        // filter binding
                        var oList = this.getView().byId("customers1");
                        var oBinding = oList.getBinding("items");
                        oBinding.filter(aFilter);
            
                  }
        
    });
});
