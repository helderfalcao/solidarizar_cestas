module.exports = function(app) {
    require("./campanhas")(app);
    require("./cestas")(app);
    require("./doacoes")(app);
    require("./familias")(app);
    require("./instituicoes")(app);
    require("./produtos")(app);
    require("./receptores")(app);
}