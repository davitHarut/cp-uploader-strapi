const { transports, format } = require('winston');
const { combine, timestamp, json } = format;

module.exports = ({ env }) => ({
  level: env('LOG_LEVEL', 'debug'),
  transports: [
    // Console transport
    new transports.Console({
      format: combine(
        format.colorize(),
        timestamp(),
        format.simple()
      ),
    }),
    // File transport for logging to a file
    new transports.File({
      filename: 'logs/strapi.log',
      level: 'info',
      format: combine(
        timestamp(),
        json()
      ),
    }),
  ],
});
