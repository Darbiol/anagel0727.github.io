ContactManager.module('ContactApp.List', function ( List, ContactManager, Backbone, Marionette, $, _){

	//Controller
	List.Controller = {
		listContacts : function(){
			var contacts = ContactManager.request( 'contact:entities' );

			var contactListView = new List.Contacts({
				collection : contacts
			});

			contactListView.on('itemview:contact:del', function(childView, model){
				//console.log(childView);
				contacts.remove(model);
			});

			contactListView.on('itemview:contact:highlight', function(childView, model){
				console.log('Highliting toggle model: ', model);
			})

			contactListView.on('itemview:contact:show', function(childView, model){
				ContactManager.ContactApp.Show.Controller.showContact(model)
			})

			ContactManager.mainRegion.show(contactListView);
		}
	}
});