var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    enderco: String,
    responsavel: String
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Receptores", model);
