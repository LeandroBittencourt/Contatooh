var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    login : {
      type : String,
      required : true,
      index : {
        unique:true
      }
    },
    nome : {
      type : String,
      required : true
    },
    inclusao : {
      type : Date,
      default: Date.now
    }
  });
  return mogoose.model('Usuario', schema);
};
