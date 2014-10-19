/* global Parse, $ */
'use strict';

// THE APP ROUTER ///////////////////////////////
var AppRouter = Parse.Router.extend({
	routes: {
		//URL to match	//function called when the hash matches

		''					: 'renderLogIn',				//	url/#
		'signup'		: 'renderSignUp',				//	url/signup
		'aboutme'		: 'renderAboutMe',			//	url/#aboutme
		'setlang'		: 'renderSetLanguages',	//	url/#setlang
		'tomeet'		: 'renderToMeet',				//	url/#tomeet
		'messenger'	: 'renderMessenger'			//	url/#messenger
	},

	initialize: function(){
		//pairs with the swap function
		this.currentView = null;

		// if there is a currently logged in user...
		if ( Parse.User.current() ) {
			//router redirects to the AboutMeView
			this.navigate('aboutme', {trigger: true});

		// if there is NOT a currently logged in user...
		} else {
			//router redirects to the LogInView
			this.navigate('', {trigger: true});
		}
	},

	// REDIRECT TO LOGIN IF NO CURRENT USER
	redirectToLogin: function(){
		this.navigate('', {trigger: true});
	},

  renderSignUp: function(){
  	this.swap( new SignUpView() );
  	$('.menubar').hide();
  },

  renderLogIn: function(){
  	this.swap( new LogInView() );
  	$('.menubar').hide();
  },

  renderAboutMe: function(){
	if ( Parse.User.current() === null ){
			this.redirectToLogin();
		} else {
			//instantiate the AboutMeView with the current user as the model
			this.swap( new AboutMeView({model: Parse.User.current().attributes}) );
			$('.menubar').show();
		}
  },

  renderSetLanguages: function(){
  if ( Parse.User.current() === null ){
			this.redirectToLogin();
		} else {
			this.swap( new SetLanguagesView() );
			$('.menubar').show();
		}
  },

  renderToMeet: function(){
  if ( Parse.User.current() === null ){
			this.redirectToLogin();
		} else {
			this.swap( new ToMeetView() );
			$('.menubar').show();
		}
  },

  renderMessenger: function(){
  if ( Parse.User.current() === null ){
			this.redirectToLogin();
		} else {
			this.swap( new MessengerView() );
			$('.menubar').show();
		}
  },

  swap: function(view){
	  if (this.currentView) this.currentView.remove();
	  this.currentView = view;
	  this.currentView.render();
  }

});

// INSTANTIATING THE ROUTER /////////////////////
Parse.initialize('VqnYqznvx3Wc5ONfDghDMrZqwx77KEFiESe4l82W', 'z3vDhzbq25kW3Y0uCNRnOBmsEMWb0XmANkjF1rTh');
var router = new AppRouter();
Parse.history.start();
