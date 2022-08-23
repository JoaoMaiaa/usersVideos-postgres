require("dotenv").config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "usersVideo",
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: true,
  },
};
