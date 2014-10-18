/* global _, Backbone, $ */
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

// ABOUT ME VIEW ////////////////////////////////
var AboutMeView = Backbone.View.extend({
	className : 'about-me',
	aboutMeTemplate: _.template($('.about-me-template').text()),

	initialize: function(){
		//appends about-me-view div with contents of the about-me-template
		$('.about-me-view').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.aboutMeTemplate);
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

// MESSENGER VIEW ///////////////////////////////
var MessengerView = Backbone.View.extend({
	className : 'messenger',
	messengerTemplate: _.template($('.messenger-template').text()),

	initialize: function(){
		//appends messenger-view div with contents of the messenger-template
		$('.messenger-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.messengerTemplate);
		return this;
	}

});

// THE APP ROUTER ///////////////////////////////
var AppRouter = Backbone.Router.extend({
	routes: {
		//URL to match	//function called when the hash matches



		''					: 'renderLogIn',				//	url/#
		'aboutme'		: 'renderAboutMe',			//	url/aboutme
		'setlang'		: 'renderSetLanguages',	//	url/setlang
		'tomeet'		: 'renderToMeet',				//	url/tomeet
		'messenger'	: 'renderMessenger'			//	url/messenger
	},

	initialize: function(){
		this.renderLogIn();
	},

  renderLogIn: function(){
  	new LogInView();
  },

  renderAboutMe: function(){
  	new AboutMeView();
  },

    renderSetLanguages: function(){
  	new SetLanguagesView();
  },

	renderToMeet: function(){
  	new ToMeetView();
  },

  renderMessenger: function(){
  	new MessengerView();
  }

});

// INSTANTIATING THE ROUTER /////////////////////
new AppRouter();
Backbone.history.start();
