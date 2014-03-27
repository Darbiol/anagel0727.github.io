ContactManager.module('ContactApp.Show', function ( Show, ContactManager, Backbone, Marionette, $, _){
	Show.Contact = Marionette.ItemView.extend({
		template : '#contact-show-template'
	});
});