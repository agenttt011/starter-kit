sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "stk/starterkit/model/formatter",
    "sap/ui/model/resource/ResourceModel"

],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Formatter, ResourceModel) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.EmployeeList", {
            formatter: Formatter,


            onInit: function () {
                const i18nModel = new ResourceModel({
                    bundleName: "stk.starterkit.i18n.i18n"
                 });
                this.getView().setModel(i18nModel, "i18n");
                this.oBundle = this.getView().getModel("i18n").getResourceBundle();


            },
            handleNavButtonPress: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList");
            },

            onMotivate: function (oEvent) {

                var oSource = oEvent.getSource();

                MessageToast.show("success");
                var oEmployee = oSource.getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@abctest.com";
                var sSubject =  this.oBundle.getText("goodJob");
                var sBody = this.oBundle.getText("doWell");;
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    
               
            },
            onFire: function (oEvent) {
                var that = this
                var oSource = oEvent.getSource();

                $.ajax({
                    url: "/generate_insult.php",
                    data: {
                        lang: "en",
                        type: "json"
                    },

                    success: function (oResponse) {
                        MessageToast.show("Failure");
                        var oEmployee = oSource.getBindingContext().getObject();
                        var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@abctest.com";
                        var sSubject = that.oBundle.getText("awfulJob");
                        var sBody =  oResponse.insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
            }
        });
    });