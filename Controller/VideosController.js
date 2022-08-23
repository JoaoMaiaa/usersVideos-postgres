const Users = require("../models/Users");
const Videos = require("../models/Videos");

module.exports = {
  async index(req, res) {
    const { userId } = req.params;

    const user = await Users.findByPk(userId, {
      include: { association: "videos" },
    });

    if (!user) {
      return res.json({ message: "Error! User don't exists" });
    }

    return res.json(user);
  },

  async store(req, res) {
    const { userId } = req.params;
    const { name, like, comment } = req.body;

    const user = await Users.findByPk(userId, {
      include: { association: "videos" },
    });

    if (!user) {
      return res.json({ message: "Error! User don't exists" });
    }

    const [video] = await Videos.findOrCreate({
      where: { name, like, comment },
    });

    user.addVideo(video);

    return res.json({ message: "Success! Created video" });
  },

  async delete(req, res) {
    const { videoId } = req.body;

    const video = await Videos.findByPk(videoId);

    if (!video) {
      return res.json({ message: "Error! User don't exists" });
    }

    await video.destroy(videoId);

    return res.json({ message: "Success! Video destroyed" });
  },
};
