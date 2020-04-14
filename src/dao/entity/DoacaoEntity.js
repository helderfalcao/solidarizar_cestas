var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    produtos: [{produto: String, quantidade: Number}],
    cesta: String,
    status: String, //Pendente, Chegou, Entregue
    imagem: String
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Doacoes", model);
