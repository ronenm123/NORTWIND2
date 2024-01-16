sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment ) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                

            },
            onPress: function () {
				var oView = this.getView(),
					oButton = oView.byId("Menu1");

				if (!this._oMenuFragment) {
					this._oMenuFragment = Fragment.load({
						id: oView.getId(),
						name: "project1.view.Menu",
						controller: this
					}).then(function(oMenu) {
						oMenu.openBy(oButton);
						this._oMenuFragment = oMenu;
						return this._oMenuFragment;
					}.bind(this));
				} else {
					this._oMenuFragment.openBy(oButton);
				}
			},
            onPress2: function () {
				var oView = this.getView(),
					oButton = oView.byId("Menu2");

				if (!this._oMenuFragment2) {
					this._oMenuFragment2 = Fragment.load({
						id: oView.getId(),
						name: "project1.view.Menu2",
						controller: this
					}).then(function(oMenu) {
						oMenu.openBy(oButton);
						this._oMenuFragment2 = oMenu;
						return this._oMenuFragment2;
					}.bind(this));
				} else {
					this._oMenuFragment2.openBy(oButton);
				}
			},
            onMenuAction2: function(oEvent) {
				var oItem = oEvent.getParameter("item");

                var text = oItem.getText();

                if (text === "Franchise Store2") {
                    console.log("MENU_R1");
                }
					
            },
            onSubmit : function () {
                var oView = this.getView ();
                var sInput = oView.byId("nameInput");

                if ((sInput.getValue().length < 1) || (sInput.getValue().length > 10)) {
                    console.log("error");
                    
                }
				var sInput1 =   oView.byId("Input1");

				if(sInput1.getValue() ===  "" ) {
					sInput1.setValueState(sap.ui.core.ValueState.Error);

				} else {
					sInput1.setValueState(sap.ui.core.ValueState.None);
				}

            },
			onChange : function (oEvent) {
				var aInputs = this.getView().byId(oEvent.getSource().getId());
				if (aInputs._lastValue.length < 3 ) {

					console.log("error111");

				}

				

			},
			onInput1Change: function (){

				if (this.getView().byId("Input1").getValue() === "" ) {
					this.getView().byId("Input1").setValueState(sap.ui.core.ValueState.Error); 
				} else {
					this.getView().byId("Input1").setValueState(sap.ui.core.ValueState.None); 
				}

			}
        });
    });
