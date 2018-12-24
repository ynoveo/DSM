sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"	
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("YNV.DSM.controller.admin_ds_list", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf YNV.DSM.view.admin_ds_list
		 */
			onInit: function() {
				var oModelDS = new JSONModel();
				// A remplacer par appel par une fonction avec ckeck des habilitations admin + dataset + contrôle de la langue
//				if(sap.ui.getCore().getModel("global").getProperty("/mode") === "test") {
				oModelDS.loadData("../webapp/localService/datasetList.json", {}, false);
//				} else {
//					oModelClGroupe.loadData(sUrl,{},false);				
//				}
				this.getView().setModel(oModelDS);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf YNV.DSM.view.admin_ds_list
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf YNV.DSM.view.admin_ds_list
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf YNV.DSM.view.admin_ds_list
		 */
		//	onExit: function() {
		//
		//	}

	});

});