// Utils
require("dotenv").config();

const { db_host, db_user, db_password, db_schema } = require("./config-env");

module.exports = {
  local: {
    username: db_user,
    password: db_password,
    database: db_schema,
    host: db_host,
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: db_user,
    password: db_password,
    database: db_schema,
    host: db_host,
    dialect: "postgres",
    logging: false,
  },
  dev: {
    username: db_user,
    password: db_password,
    database: db_schema,
    host: db_host,
    dialect: "postgres",
    logging: false,
  },
  uat: {
    username: db_user,
    password: db_password,
    database: db_schema,
    host: db_host,
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: db_user,
    password: db_password,
    database: db_schema,
    host: db_host,
    dialect: "postgres",
    dialectOptions: {
      ssl: "Amazon RDS",
    },
    define: {
      freezeTableName: true,
      logging: false,
    },
  },
};


