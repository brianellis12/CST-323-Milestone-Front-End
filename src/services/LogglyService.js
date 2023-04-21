// Import loggly
import { LogglyTracker } from 'loggly-jslogger';

// Create a loggly tracker
const logglyTracker = new LogglyTracker();
logglyTracker.push(
    {
        'logglyKey': 'c0387118-60fa-4f91-aba1-fe59513e2ea7',
        'tag': 'cst323-milestone-front-end-logs',
        'sendConsoleErrors': true,
        'useDomainProxy': true
    }
);

// Prefix the logged messages
const prefix = (className, message) => {
    let date = `[${new Date().toISOString()}]\t`;
    return className ? `${date}[${className}]\t${message}` : `${date}${message}`;
}

// Define the logger methods
const logger = {
    // Log messages to loggly and to console
    info: (className, message) => {
        message = prefix(className, message);
        logglyTracker.push({
            level: 'info',
            message: message,
            timestamp: new Date().toISOString()
        });
        console.log(message);
    },
    // Debug messages to loggly and to console
    debug: (className, message) => {
        message = prefix(className, message);
        logglyTracker.push({
            level: 'debug',
            message: message
        });
        console.debug(message);
    },
    // Warning messages to loggly and to console
    warn: (className, message) => {
        message = prefix(className, message);
        logglyTracker.push({
            level: 'warn',
            message: message
        });
        console.warn(message);
    },
    // Error messages to loggly and to console
    error: (className, message) => {
        message = prefix(className, message);
        logglyTracker.push({
            level: 'error',
            message: message
        });
        console.error(message);
    }
}

// Export the logger
export default logger; 
