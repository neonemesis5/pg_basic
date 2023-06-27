const app = require("../app");
// const port = process.env.PORT || 3000;
const { port, endpoint, db_host } = require("../config/config-env");
const Wlogger = require("../config/winston");

app.listen(port, () =>
  Wlogger.info(
    port
      ? `Express server running on port: ${port}, endpoint: ${endpoint}, db_host: ${db_host}`
      : "Error connecting to server!"
  )
);
