const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// Cors configurations
var cors = require('cors');
var cookieParser = require('cookie-parser');

var corsOptions = {
  origin: process.env['DOMAIN_CLIENT'] ? process.env['DOMAIN_CLIENT'] : 'http://localhost:8080',
  credentials: true
};
app.use(cors(corsOptions));
app.use(cookieParser());

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['./src/routes/*.js']
  apis: ["app.js", "./src/routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Parse json
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb',  extended: true}));

// Datasource connection call
require("./src/dao/db")();

// Load routes
require("./src/routes/index")(app)

app.listen(port, () => {
  console.log("Server is running");
});
