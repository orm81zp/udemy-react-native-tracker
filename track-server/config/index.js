require('dotenv').config();

module.exports = {
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  SECRET_KEY: process.env.SECRET_KEY,
}