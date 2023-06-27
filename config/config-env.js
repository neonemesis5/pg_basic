const dotenv = require("dotenv");

dotenv.config();

if (process.env.NODE_ENV === "production") {
  module.exports = {
    endpoint: process.env.PROD_API_URL,
    port: process.env.PORT || "3000",
    url: process.env.PROD_ADMIN_URL,
    db_host: process.env.PROD_DB_URL,
    db_user: process.env.DB_USER,
    db_password: process.env.PROD.DB_PASSWORD,
    db_schema: process.env.PROD_DB_SCHEMA,
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    client_url: process.env.PROD_CLIENT_URL,
  };
} else if (process.env.NODE_ENV === "uat") {
  module.exports = {
    endpoint: process.env.UAT_API_URL,
    port: process.env.PORT || "3000",
    url: process.env.UAT_URI,
    db_host: process.env.UAT_DB_URL,
    db_user: process.env.UAT_DB_USER,
    db_password: process.env.UAT_DB_PASSWORD,
    db_schema: process.env.UAT_DB_SCHEMA,
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    client_url: process.env.UAT_CLIENT_URL,
  };
} else if (process.env.NODE_ENV === "dev") {
  module.exports = {
    endpoint: process.env.DEV_API_URL,
    port: process.env.PORT || "3000",
    url: process.env.DEV_URI,
    db_host: process.env.DEV_DB_URL,
    db_user: process.env.DEV_DB_USER,
    db_password: process.env.DEV_DB_PASSWORD,
    db_schema: process.env.DEV_DB_SCHEMA,
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    client_url: process.env.DEV_CLIENT_URL,
  };
} else if (process.env.NODE_ENV === "local") {
  module.exports = {
    endpoint: process.env.LOCAL_API_URL,
    port: process.env.PORT || "3000",
    url: process.env.LOCAL_URI,
    db_host: process.env.LOCAL_DB_URL,
    db_user: process.env.LOCAL_DB_USER,
    db_password: process.env.LOCAL_DB_PASSWORD,
    db_schema: process.env.LOCAL_DB_SCHEMA,
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    client_url: process.env.LOCAL_CLIENT_URL,
  };
} else if (process.env.NODE_ENV === "test") {
  module.exports = {
    endpoint: process.env.LOCAL_API_URL,
    port: process.env.PORT || "3000",
    url: process.env.DEV_URI,
    db_host: process.env.DEV_DB_URL,
    db_user: process.env.DEV_DB_USER,
    db_password: process.env.DEV_DB_PASSWORD,
    db_schema: process.env.DEV_DB_SCHEMA,
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    client_url: process.env.DEV_CLIENT_URL,
  };
}
