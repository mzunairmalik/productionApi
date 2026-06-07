import winston from 'winston';

import 'dotenv/config';

// Create a logger instance
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine((
        winston.format.timestamp(),
        winston.format.errors({
            stack: true
        }),
        winston.format.json()
    )), // Save logs as JSON objects
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Only save errors here
        new winston.transports.File({ filename: 'logs/combined.log' }), // Save all logs here
    ],
});


if(process.env.NODE_ENV !=='production'){
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }))
}
// Use it anywhere in your app
logger.info('Server started on port 3000');
logger.error('Database connection failed!'); 

export default logger;