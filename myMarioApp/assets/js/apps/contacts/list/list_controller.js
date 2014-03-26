ContactManager.module('ContactApp.List', function ( List, ContactManager, Backbone, Marionette, $, _){

	//Controller
	List.Controller = {
		listContacts : function(){
			var contacts = ContactManager.request( 'contact:entities' );

			var contactListView = new List.Contacts({
				collection : contacts
			});

			ContactManager.mainRegion.show(contactListView);
		}
	}
});