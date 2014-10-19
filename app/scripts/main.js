/* global _, Parse, $ */
'use strict';

// LOG IN VIEW //////////////////////////////////
var LogInView = Parse.View.extend({
	className : 'login',
	loginTemplate: _.template($('.login-template').text()),

	events: {
		'click .login-btn'	: 'userLogIn',
	},

	initialize: function(){
		//appends login-view div with contents of the login-template
		$('.login-view').html(this.el);
	},

	render: function(){
		this.$el.html(this.loginTemplate);
		return this;
	},

	userLogIn: function(){
		//naming the value of the input fields
		var usernameVal = $('#email').val();
		var passwordVal = $('#password').val();
		
		//calls Parse's login function
		Parse.User.logIn(usernameVal, passwordVal, {
		  success: function(user) {
				console.log('Username', user.get('email'), 'is logged in.');
				router.navigate('userview', {trigger: true});
			},

		  error: function(user, error) {
		  	//alert('Error: Log in failed.');
		  	console.log('User not logged in.' + error.code + ' ' + error.message);
				//user stays on the login page
		  }
		});
	}
});

// SIGN UP VIEW ///////////////////////////////////////////////////////////
var SignUpView = Parse.View.extend({
	
	signupTemplate: _.template($('.signup-template').text()),

	events: {
		'click .signup-btn' : 'userSignUp'
	},

	initialize: function(){
		//appends signup-view div with contents of the signup-template
		$('.signup-view').html(this.el);
	},

	render: function(){
		this.$el.html(this.signupTemplate);
		return this;
	},

	userSignUp: function(){
		//naming the value of the input fields
		var usernameVal = $('.username-input').val();
		var emailVal = $('.email-input').val();
		var passwordVal = $('.password-input').val();

		//creates a user instance; adds that instance to the users collection
		//sets the properties of that user to be the value of the input fields
		var user = new Parse.User();
		user.set({
			'username':		usernameVal,
			'email':			emailVal,
			'password':		passwordVal,
		});

		//saves added input to the server; when done...
		user.signUp(null, {
			success: function(user) {
				console.log('Username', user.get('username'), 'is logged in.');
    		router.navigate('aboutme', {trigger: true});
  		},
  		error: function(user, error) {
    		//alert('Error: Sign up failed.');
				console.log('User not logged in.' + error.code + ' ' + error.message);
				//user stays on the signup page
  		}
		});
	}

});

// ABOUT ME VIEW ////////////////////////////////
var AboutMeView = Parse.View.extend({
	className : 'about-me',
	aboutMeTemplate: _.template($('.about-me-template').text()),

	initialize: function(){
		//appends about-me-view div with contents of the about-me-template
		$('.about-me-view').html(this.el);
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
	},

	render: function(){
		this.$el.html(this.messengerTemplate);
		return this;
	}

});
