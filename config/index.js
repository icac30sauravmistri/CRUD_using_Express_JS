const dotenv = require("dotenv");
dotenv.config();

const { DB_CONNECT, PORT } = process.env;

module.exports = { DB_CONNECT, PORT };
