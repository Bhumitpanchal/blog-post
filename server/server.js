const express = require("express");
const app = express();

const adminRoutes = require("./router/adminRoutes.js");

const sequelize = require("./util/sequelize-connection");

app.use(adminRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
