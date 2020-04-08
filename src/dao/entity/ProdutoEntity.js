var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    descricao: String,
    imagem: String
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Produtos", model);
