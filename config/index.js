const dotenv = require('dotenv');
dotenv.config();

const { URI, PORT } = process.env;

export { URI, PORT };
