
var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var model = new Schema({
nome: String,
descricao: String,
responsavel: String,
idInstituicao: String
}, {
strict: false
});

module.exports = mongoose.model("Campanhas", model);