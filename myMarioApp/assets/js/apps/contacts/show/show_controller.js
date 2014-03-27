ContactManager.module('ContactsApp.Show', function ( Show, ContactManager, Backbone, Marionette, $, _){
	Show.Controller = {
		showContact : function (model) {
			var contacts = ContactManager.request('contact:entities');

			var contactView = new Show.Contact({
				model : model
			});

			ContactManager.mainRegion.show(contactView);
		}
	}
});