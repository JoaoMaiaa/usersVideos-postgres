const Users = require("../models/Users");

module.exports = {
  async index(req, res) {
    const users = await Users.findAll();

    return res.json({ users });
  },

  async store(req, res) {
    const { name, assignment } = req.body;

    const user = await Users.create({ name, assignment });

    return res.json({ message: "Success! Created user", user });
  },

  async update(req, res) {
    const { name, assignment } = req.body;
    const { userId } = req.params;

    const user = await Users.findByPk(userId);

    if (!user) {
      return res.json({ message: "Error! User don't exist" });
    }

    await user.update({ name, assignment }, { where: { id: userId } });

    return res.json({ message: "Success! Updated user" });
  },

  async delete(req, res) {
    const { userId } = req.params;

    const user = await Users.findByPk(userId);

    if (!user) {
      return res.json({ message: "Error! User don't exist" });
    }

    await user.destroy(userId);

    return res.json({ message: "Success! Deleted user" });
  },
};
