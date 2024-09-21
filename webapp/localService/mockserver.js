sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/Log"
],
    function(MockServer,Log){
        "use strict";
        return{
            init: function(){
                var oMockServer = new MockServer({
                    rootUri:"https://services.odata.org/V2/Northwind/Northwind.svc/"
                });
                oMockServer.simulate("../localService/metadata.xml",{
                    sMockdataBaseUrl: "../localService/mockdata",
                    bGenerateMissingMockData: true
                })
                sap.m.MessageToast.show('Mock data works.')
                oMockServer.start();
                Log.info("Running the app")
            }
        }
    })