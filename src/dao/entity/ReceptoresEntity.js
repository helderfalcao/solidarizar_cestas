var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    enderço: String,
    cesta: String,
    status: String, //Pendente, Chegou, Entregue
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Receptores", model);
