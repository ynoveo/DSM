/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"YNV/DSM/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"YNV/DSM/test/integration/pages/View1",
	"YNV/DSM/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "YNV.DSM.view.",
		autoWait: true
	});
});