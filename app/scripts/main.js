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