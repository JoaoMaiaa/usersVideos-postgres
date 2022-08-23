const Users = require("../models/Users");
const Videos = require("../models/Videos");

Users.belongsToMany(Videos, {
  foreignKey: "userId",
  through: "usersVideos",
  as: "videos",
});

Videos.belongsToMany(Users, {
  foreignKey: "videoId",
  through: "usersVideos",
  as: "users",
});

module.exports = { Users, Videos };
