
var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var model = new Schema({
nome: String
}, {
strict: false
});

module.exports = mongoose.model("Doadores", model);