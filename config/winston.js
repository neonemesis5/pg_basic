// Utils
require("winston-daily-rotate-file");
const dotenv = require("dotenv");
const fs = require("fs");
const { createLogger, format, transports } = require("winston");

dotenv.config();

const env = process.env.NODE_ENV || "development";
const logDir = "./logs";

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const httpTransportOptions = {
  host: "http-intake.logs.datadoghq.com",
  path: `/api/v2/logs?dd-api-key=${process.env.DATADOG_API_KEY}&ddsource=nodejs&service=claims-connect-${process.env.NODE_ENV}`,
  ssl: true,
};

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/pizzas-api-%DATE%.log`,
  datePattern: "YYYY-MM-DD",
  zippedArchive: true, // writes to gzip archive
  maxSize: "200m", // use only integer for number bytes, or add suffix of k, m, or g for kilobytes, megabytes and gigabytes respectively
  // maxFiles: '14d'
  // use integer for number of log files to keep or add d as suffix for number of days
});

const Wlogger = createLogger({
  // change level if in dev environment versus production
  level: env ? "verbose" : "http",
  format: format.json(),
  exitOnError: false, // do not exit on handled exceptions
  transports: [
    new transports.Console(),
    dailyRotateFileTransport,
    ...(env !== "dev" ? [new transports.Http(httpTransportOptions)] : []),
  ],
});

Wlogger.stream = {
  write(message) {
    Wlogger.http(message);
  },
};

module.exports = Wlogger;
