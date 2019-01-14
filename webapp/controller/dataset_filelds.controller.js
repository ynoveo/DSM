sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent",
	'sap/ui/model/json/JSONModel'
], function (Controller, MessageToast, UIC,JSONModel) {
	"use strict";

	return Controller.extend("YNV.DSM.controller.dataset_filelds", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf YNV.DSM.view.dataset_filelds
		 */
		onInit: function () {
		// JSON pour les systèmes sources	
			var oModelSyst = new JSONModel();
			oModelSyst.loadData("../webapp/localService/systemList.json", {}, false);
			this.getView().setModel(oModelSyst, "Systemes");
			
		//JSON pour les tables actives du modèle
//	
			var oModelTbl = new JSONModel();
			oModelTbl.loadData("../webapp/localService/DataModel.json", {}, false); 
			this.getView().setModel(oModelTbl, "DataTableModel");
		},
		moveToSelectedSystems: function() {
			var oAvailableSystemsTable = this.byId("SystDispo");
			var aSelectedItems = oAvailableSystemsTable.getSelectedItems();
			var oSelectedItem = aSelectedItems[0];
			if (!oSelectedItem) {
				MessageToast.show("Please select a row!");
				return;
			}else
				{
					var oContext = oSelectedItem.getBindingContext("Systemes");
					var oModel = oAvailableSystemsTable.getModel("Systemes");
					oModel.setProperty("Selected", "X", oContext);
				}
		},
		moveToAvailableSystems: function() {
			var oAvailableSystemsTable = this.byId("SystSelection");
			var aSelectedItems = oAvailableSystemsTable.getSelectedItems();
			var oSelectedItem = aSelectedItems[0];
			if (!oSelectedItem) {
				MessageToast.show("Please select a row!");
				return;
			}else
				{
					var oContext = oSelectedItem.getBindingContext("Systemes");
					var oModel = oAvailableSystemsTable.getModel("Systemes");
					oModel.setProperty("Selected", "", oContext);
				}
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf YNV.DSM.view.dataset_filelds
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf YNV.DSM.view.dataset_filelds
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf YNV.DSM.view.dataset_filelds
		 */
		//	onExit: function() {
		//
		//	}
		onTestPress: function(oevent){
			var t = "Controleur principal";
			MessageToast.show(t);
		}
	});

});