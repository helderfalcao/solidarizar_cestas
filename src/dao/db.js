const mongoose = require("mongoose");
module.exports = function () {
  var mongoURI = process.env["MLAB_CONNECTION"]
    ? process.env["MLAB_CONNECTION"]
    : "mongodb://localhost:27017/solidarizar";
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .on("error", function (err) {
      console.log(err.message);
    })
    .once("open", function () {
      console.log("mongodb connection open");
    });
  mongoose.Promise = require("bluebird");
};
