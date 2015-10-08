var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();
  //configuração de ambiente
  app.set('port', 3000);

  //middleware
  app.use(express.static('./public'));
  //define a View  Engine
  app.set('view engine', 'ejs');
  //define a localização das views
  app.set('views','./app/views');
  //Middlewares
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  load('models', {cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
