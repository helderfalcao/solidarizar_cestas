var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var model = new Schema(
  {
    nome: String,
    descricao: String,
    responsavel: String,
    idInstituicao: String,
    imagem: String,
    doacoes: [String],
    receptores: [String]
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Campanhas", model);
