var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    descricao: String,
    produtos: [String],
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Cestas", model);
