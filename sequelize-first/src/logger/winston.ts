// @ts-ignore
import * as winston from "winston";
import 'winston-daily-rotate-file';
// @ts-ignore
import { Logger, format } from 'winston';
const { combine, timestamp, prettyPrint, colorize, errors, json } = format;

let logger: Logger;

const createLogger = () => {
  if (logger) {
    logger.error('Logger instance already defined. So ignore it.');
    return;
  }

  logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'warn' : 'info',
    format: combine(
        errors({ stack: true }), // <-- use errors format
        timestamp(),
        json(),
        ...(process.env.NODE_ENV !== 'production' ? [prettyPrint()] : []),
    ),
    defaultMeta: { service: 'pie' },
    transports: [],
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
          format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        }),
    );
  }
};

export { logger, createLogger }