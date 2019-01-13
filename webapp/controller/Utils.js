sap.ui.define([
	"sap/m/MessageToast"
], function(MessageToast) {
	"use strict";

	var Utils = {

		onSalut: function() {
				MessageToast.show("Salut");
			}

	};

	return Utils;

}, /* bExport= */ true);