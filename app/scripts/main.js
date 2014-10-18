/* global _, Backbone */
'use strict';

// LOG IN VIEW //////////////////////////////////
var LogInView = Backbone.View.extend({
	className : 'login',
	loginTemplate: _.template($('.login-template').text()),

	initialize: function(){
		//appends login-view div with contents of the login-template
		$('.login-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.loginTemplate);
		return this;
	}

});

// SET LANGUAGES VIEW ///////////////////////////
var SetLanguagesView = Backbone.View.extend({
	className : 'set-lang',
	setLangTemplate: _.template($('.set-lang-template').text()),

	initialize: function(){
		//appends set-lang-view div with contents of the set-lang-template
		$('.set-lang-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.setLangTemplate);
		return this;
	}

});

// WANT TO MEET VIEW ////////////////////////////
var ToMeetView = Backbone.View.extend({
	className : 'to-meet',
	toMeetTemplate: _.template($('.to-meet-template').text()),

	initialize: function(){
		//appends to-meet-view div with contents of the login-template
		$('.to-meet-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.toMeetTemplate);
		return this;
	}

});


// THE APP ROUTER ///////////////////////////////
var AppRouter = Backbone.Router.extend({
	routes: {
		//URL to match	//function called when the hash matches
		''				: 'renderLogIn',				//	url/#
	},

	initialize: function(){

	},

  renderLogIn: function(){
  	new LogInView();
  }

});

// INSTANTIATING THE ROUTER /////////////////////
new AppRouter();
Backbone.history.start();