var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('563e26653659d3257c39987e');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
  function(erro, db){
      if(erro) throw err;
      db.collection('contatos').findOne({_id:_idProcurado},
        function(erro, contato){
          if(error) throw err;
          console.log(contato);
        }
      );
  }
);
