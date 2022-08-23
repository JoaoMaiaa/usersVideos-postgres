const express = require("express");
const routes = express.Router();

const UsersController = require("./Controller/UsersController");
const VideosController = require("./Controller/VideosController");

routes.get("/users", UsersController.index);
routes.post("/users", UsersController.store);
routes.put("/users/:userId/users", UsersController.update);
routes.delete("/users/:userId/users", UsersController.delete);

routes.get("/users/:userId/videos", VideosController.index);
routes.post("/users/:userId/videos", VideosController.store);
routes.delete("/users/:videoId/videos", VideosController.delete);

module.exports = routes;
