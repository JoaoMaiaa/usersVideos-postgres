const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Users = sequelize.define("users", {
  name: DataTypes.STRING,
  assignment: DataTypes.STRING,
});

module.exports = Users;
