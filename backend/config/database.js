
const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance',{ useNewUrlParser: true })

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'."


/*
var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/db_finance');
mongoose.connection.on('connected', function () {
 console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error', function (err) {
 console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
 console.log('=====Conexão finalizada=====');
}); 
*/