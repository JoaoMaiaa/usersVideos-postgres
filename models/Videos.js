const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Videos = sequelize.define("videos", {
  name: DataTypes.STRING,
  like: DataTypes.INTEGER,
  comment: DataTypes.INTEGER,
});

module.exports = Videos;
