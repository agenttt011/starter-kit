sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/resource/ResourceModel"
    ],
    function(BaseController, ResourceModel) {
      "use strict";
  
      return BaseController.extend("stk.starterkit.controller.App", {
        onInit: function() {
          const i18nModel = new ResourceModel({
            bundleName: "stk.starterkit.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
        }
      });
    }
  );
  