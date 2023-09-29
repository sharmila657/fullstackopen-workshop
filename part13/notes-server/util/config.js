require("dotenv").config();

module.exports = {
  DB_CONNECTION: process.env.DB_CONNECTION,
  PORT: 3001,
  SECRET: process.env.SECRET,
};
``;
