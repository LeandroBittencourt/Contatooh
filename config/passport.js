var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
    clientID : 'e275e0e3f5ec4bc2eced',
    clientSecret : '7d4f8e92f9f4dba4b953bb8d48753fa405dda5bd',
    callbackURL : 'http://localhost:3000/auth/github/callback'
  },
    function(accessToken, refreshToken, profile, done){
      Usuario.findOrCreate(
        {"login" : profile.username},
        {"nome" : profile.username },
        function (erro, usuário){
          if(erro){
            console.log(erro);
            return done(erro);
          }
          return done(null, usuario);
        }
      );
    }
  ));
  passport.serializeUser(function(usuario, done) {
    done(null, usuario._id);
  });

  passport.deserializeUser(function(id, done){
    Usuario.findById(id).exec()
    .then(function(usuario){
      done(null, usuario);
    });
  });
};
