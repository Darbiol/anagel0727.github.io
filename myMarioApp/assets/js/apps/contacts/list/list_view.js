ContactManager.module('ContactApp.List', function ( List, ContactManager, Backbone, Marionette, $, _){

	//single Item view
	List.Contact = Marionette.ItemView.extend({
		tagName : 'tr',
		template : '#contact-template'
	})

	// List.Contacts = Marionette.CollectionView.extend({
	// 	tagName : 'table',
	// 	className : 'table table-hover',
	// 	itemView : List.Contact
	// });
	List.Contacts = Marionette.CompositeView.extend({
		tagName : 'table',
		className : 'table table-hover',
		template : '#contact-list',
		itemView : List.Contact,
		itemViewContainer : 'tbody'

	});

});