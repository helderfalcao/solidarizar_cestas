var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    produtos: [{ produto: String, quantidade: Number }],
    doador: String,
    cesta: String,
    status: String, //Pendente, Chegou, Entregue
    imagem: String,
    campanha: String
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Doacoes", model);
