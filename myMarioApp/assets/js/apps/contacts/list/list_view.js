ContactManager.module('ContactApp.List', function ( List, ContactManager, Backbone, Marionette, $, _){

	//single Item view
	List.Contact = Marionette.ItemView.extend({
		tagName : 'tr',
		template : '#contact-template',
		events : {
			'click' : 'highlightName',
			'click button.delete' : 'removeContact',
			'click a.js-show' : 'showUser'
		},
		highlightName : function (){
			this.$el.toggleClass('warning')
			this.trigger('contact:highlight', this.model);
		},
		alertText : function(e){
			alert($(e.target).html());
		},
		removeContact : function(e){
			e.stopPropagation();
			console.log(this.model.collection);

			this.trigger('contact:del', this.model);

		},
		remove : function(){
			this.$el.fadeOut(function(){
				$(this).remove();
			});
		},
		showUser : function(e){
			e.stopPropagation();
			e.preventDefault();
			this.trigger('contact:show', this.model)
		}

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
		itemViewContainer : 'tbody',
		onItemviewContactDel : function(){
			this.$el.fadeOut(1000, function(){
				$(this).fadeIn(1000);
			})
		}

	});


});