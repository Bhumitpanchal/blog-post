const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog-post", "root", "admin123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
