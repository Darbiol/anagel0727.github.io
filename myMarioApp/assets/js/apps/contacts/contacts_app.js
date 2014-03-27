ContactManager.module('ContactApp', function ( ContactApp, ContactManager, Backbone, Marionette, $, _){
	ContactApp.Router = Marionette.AppRouter.extend({
		appRoutes : {
			"contacts" : 'listContacts',
			"contacts/:id" : 'showContact'
		}
	});

	var API = {
		listContacts : function(){
			ContactApp.List.Controller.listContacts();
			console.log('route to list was triggered');
		},
		showContact : function ( id ){
			ContactApp.Show.Controller.showContact(id);
		}
	}

	ContactManager.on('contact:list', function(){
		ContactManager.navigate('contacts')
		API.listContacts();
	})

	ContactManager.on('contact:show', function ( id ){
		ContactManager.navigate('contacts/'+id);
		API.showContact(id);
	});

	ContactManager.addInitializer(function(){
		new ContactApp.Router({
			controller : API
		});
	});
});