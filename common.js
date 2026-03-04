require("dotenv").config();

const OPEN_API_URL = process.env.OPEN_API_URL;
const OPEN_API_KEY = process.env.OPEN_API_KEY;
const PORT = process.env.PORT;

module.exports = { OPEN_API_KEY, PORT, OPEN_API_URL };
