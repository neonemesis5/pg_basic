  require('dotenv').config();
  const Sequelize = require("sequelize");
  const Wlogger = require("./winston");


  const env = process.env.NODE_ENV || "dev";
  const config = require("./config")[env];
// console.log("-->",config);
  const db = {};
  // Set connection string
  const sequelize = new Sequelize(process.env.LOCAL_DB_NAME, process.env.LOCAL_DB_USER,  process.env.LOCAL_DB_PASSWORD, {
    host: process.env.LOCAL_DB_URL,
    dialect: 'postgres',
    schema: process.env.LOCAL_DB_SCHEMA,
    dialectOptions: {
      binaryPasswords: true
    }
  });


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