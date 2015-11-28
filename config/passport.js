var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = funtion() {
  passport.use(new GitHubStrategy({
    clientID : 'e275e0e3f5ec4bc2eced',
    clientSecret : '7d4f8e92f9f4dba4b953bb8d48753fa405dda5bd',
    callbackURL : 'http://localhost:3000/auth/github/callback'
  },
    function(accessToken, refreshToken, profile, done){

    }
  ));
};
