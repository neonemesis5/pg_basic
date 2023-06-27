// database.js
const Sequelize = require("sequelize");
const Wlogger = require("./winston");

const env = process.env.NODE_ENV || "dev";
const config = require("./config")[env];

const db = {};

// Set connection string
const sequelize = new Sequelize(config);

async function testConnection() {
  try {
    if (!(process.env.NODE_ENV === "test")) {
     await sequelize.authenticate();
      Wlogger.info("Connection has been established successfully.");
    }
  } catch (error) {
    if (!(process.env.NODE_ENV === "test")) {
      Wlogger.error(error.message);
    }
  }
}

testConnection();

db.sequelize = sequelize;

module.exports = db;
