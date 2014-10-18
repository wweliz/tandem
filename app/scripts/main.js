/* global _, Parse, $ */
'use strict';

// LOG IN VIEW //////////////////////////////////
var LogInView = Parse.View.extend({
	className : 'login',
	loginTemplate: _.template($('.login-template').text()),

	initialize: function(){
		//appends login-view div with contents of the login-template
		$('.login-view').html(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.loginTemplate);
		return this;
	}
});
console.log('render function ran');

// ABOUT ME VIEW ////////////////////////////////
var AboutMeView = Parse.View.extend({
	className : 'about-me',
	aboutMeTemplate: _.template($('.about-me-template').text()),

	initialize: function(){
		//appends about-me-view div with contents of the about-me-template
		$('.about-me-view').html(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.aboutMeTemplate);
		return this;

	}

});

// SET LANGUAGES VIEW ///////////////////////////
var SetLanguagesView = Parse.View.extend({
	className : 'set-lang',
	setLangTemplate: _.template($('.set-lang-template').text()),

	initialize: function(){
		//appends set-lang-view div with contents of the set-lang-template
		$('.set-lang-view').html(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.setLangTemplate);
		return this;
	}

});

// WANT TO MEET VIEW ////////////////////////////
var ToMeetView = Parse.View.extend({
	className : 'to-meet',
	toMeetTemplate: _.template($('.to-meet-template').text()),

	initialize: function(){
		//appends to-meet-view div with contents of the login-template
		$('.to-meet-view').html(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.toMeetTemplate);
		return this;
	}

});

// MESSENGER VIEW ///////////////////////////////
var MessengerView = Parse.View.extend({
	className : 'messenger',
	messengerTemplate: _.template($('.messenger-template').text()),

	initialize: function(){
		//appends messenger-view div with contents of the messenger-template
		$('.messenger-view').html(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.messengerTemplate);
		return this;
	}

});

// THE APP ROUTER ///////////////////////////////
var AppRouter = Parse.Router.extend({
	routes: {
		//URL to match	//function called when the hash matches



		''					: 'renderLogIn',				//	url/#
		'aboutme'		: 'renderAboutMe',			//	url/#aboutme
		'setlang'		: 'renderSetLanguages',	//	url/#setlang
		'tomeet'		: 'renderToMeet',				//	url/#tomeet
		'messenger'	: 'renderMessenger'			//	url/#messenger
	},

	initialize: function(){
		this.currentView = null;
	},

  renderLogIn: function(){
  	this.swap( new LogInView() );
  },

  renderAboutMe: function(){
  	this.swap( new AboutMeView() );
  },

  renderSetLanguages: function(){
  	this.swap( new SetLanguagesView() );
  },

	renderToMeet: function(){
  	this.swap( new ToMeetView() );
  },

  renderMessenger: function(){
  	this.swap( new MessengerView() );
  },

  swap: function(view){
	  if (this.currentView) {this.currentView.remove();
	  this.currentView = view;
	  this.currentView.render();
  }
}
});

// INSTANTIATING THE ROUTER /////////////////////
Parse.initialize('VqnYqznvx3Wc5ONfDghDMrZqwx77KEFiESe4l82W', 'z3vDhzbq25kW3Y0uCNRnOBmsEMWb0XmANkjF1rTh');
new AppRouter();
Parse.history.start();


// $(document).ready(function() {
//     $('.menu').dropit();
//
// });
