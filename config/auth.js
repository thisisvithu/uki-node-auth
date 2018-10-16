// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '276829799471138', // your App ID
        'clientSecret'  : '16d6af0f52153d9d63c100412483bd11', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'emails', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : '3PuoJCdCfwl8DQj6JDdy1fWkW',
        'consumerSecret'    : 'W1LufivjwnmTpK2I8oo7STySNufg3wLwQ8G8ncvEZE4CkjNgRj',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '230206544156-1muo2rne0prm98nr00btct4uskjucnng.apps.googleusercontent.com',
        'clientSecret'  : 'ea8q000ECAKKsTkJhJPLr96y',
        'callbackURL'   : 'http://127.0.0.1:8080/auth/google/callback'
    }

};
