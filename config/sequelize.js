const Database = require("./config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(Database);

module.exports = sequelize;
