ContactManager.module('Entities', function ( Entities , ContactManager, Backbone, Marionette, $, _){
	//models
	Entities.Contacts = Backbone.Model.extend({
		defaults : {
			phoneNumber : 'No Available Phone Number'
		}
	});

	//Collection
	Entities.ContactsCollection = Backbone.Collection.extend({
		model : Entities.Contacts,
		comparator : function(contact){
		return contact.get('firstName') + " " + contact.get('lastName')
		}
	})

	// init contacts
	var contacts;

	var initContacts = function ( ){
		contacts = new Entities.ContactsCollection([
				{
				 firstName: "Alice",
				 lastName: "Tampen"
				},
				{
				 firstName: "Bob",
				 lastName: "Brigham"
				},
				{
				 firstName: "Alice",
				 lastName: "Artsy"
				},
				{
				 firstName: "Alice",
				 lastName: "Arten"
				},
				{
				 firstName: "Charlie",
				 lastName: "Campbell"
				},
				{
				 firstName: "Alice",
				 lastName: "Smith"
				}
			]);
	}

	var API ={
		getContactEntities :function(){
			if(contacts === undefined){
				initContacts();
			}
			return contacts;
		}
	}

	ContactManager.reqres.setHandler("contact:entities", function(){
		return API.getContactEntities();
	});
});