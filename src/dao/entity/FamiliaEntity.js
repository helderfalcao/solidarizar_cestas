var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    integrantes: [String],
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Familias", model);
