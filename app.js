const express = require("express");

const app = express();
const cors = require("cors");
const Wlogger = require("./config/winston");
require("dotenv").config();

// Default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


if (process.env.NODE_ENV === "dev") {
    app.use(
      cors({
        origin: [
          "http://localhost:3000",
          "https://localhost:3000",
        //   "http://localhost:4200",
        //   "https://localhost:4200",
        ],
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );
  } else {
    app.use(
      cors({
        origin: [

          "http://localhost:4200", // this line should be remove

        ],
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );
  }
  const environment = process.env.NODE_ENV;
  Wlogger.info(`API initiated; starting ${environment} environment...`);



//definiendo las rutas 
// const usersRoutes = require("./routes/users.route");
const usersRoutes = require("./routes/users.route");
app.use('/user', usersRoutes);// la ruta en la url es la definida en en las comillas, mientras que quien la atiende es la que posee la palabra route

const opcabanRouter  = require("./routes/opcajabanco.route");
app.use("/opcajaban",opcabanRouter);


app.use((req, res, next) => {
  const err = new Error(
    "The requested route does not exist, or the call method is invalid."
  );
  err.status = 404;
  next(err);
});

if (environment === "development" || environment === "local") {
  app.use((err, req, res) => {
    res
      .status(err.status)
      .send({ Status: err.status, errorAPIResponse: err.message });
  });
}
module.exports = app;