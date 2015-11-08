'use strict';

var winston = require('winston');

var consoleTransport = new (winston.transports.Console)({timestamp:true, colorize:true, handleExceptions: false, humanReadableUnhandledException: false, prettyPrint: false, stringify:true});
var producerLogFileTransport = new (winston.transports.File)({timestamp:true, filename: '../logs/producer.log', level:'debug', maxsize: 1024000, maxFiles: 10, handleExceptions: true,json: false, humanReadableUnhandledException: false, prettyPrint: false, stringify:true});
var consumerLogFileTransport = new (winston.transports.File)({timestamp:true, filename: '../logs/consumer.log', level:'debug', maxsize: 1024000, maxFiles: 10, handleExceptions: true,json: false, humanReadableUnhandledException: false, prettyPrint: false, stringify:true});

winston.loggers.add('producer', {
    transports: [consoleTransport, producerLogFileTransport]
});

winston.loggers.add('consumer', {
    transports: [consoleTransport, consumerLogFileTransport]
});

winston.cli();

/**
 * @description A simple logging interface for separate consumer and producer logs
 * @module logger
 * @type {{consumer: *, producer: *}}
 */
module.exports = {
    consumer: winston.loggers.get('consumer'),
    producer: winston.loggers.get('producer')
};