var ContactManager = new Marionette.Application();

//Regions
ContactManager.addRegions({
	mainRegion :'#main-region'
});


ContactManager.on('initialize:after', function(){
	ContactManager.ContactApp.List.Controller.listContacts();
	console.log('finished initializing. Contact Manager Started.');
})