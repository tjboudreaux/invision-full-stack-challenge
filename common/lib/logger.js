'use strict';

var winston = require('winston');

var consoleTransport = new (winston.transports.Console)({timestamp:true, colorize:true, handleExceptions: false, humanReadableUnhandledException: false, prettyPrint: false, stringify:true});

//create uniform options for producer and consumer, except filenames
var fileOptions = {
    tailable: true,
    timestamp:true,
    level:'debug',
    maxsize: 10240000,
    maxFiles: 10,
    handleExceptions: true,
    json: false,
    humanReadableUnhandledException: false,
    prettyPrint: false,
    stringify:true
};

var producerOptions = JSON.parse(JSON.stringify(fileOptions));
producerOptions.filename =  '../logs/producer.log';

var consumerOptions = JSON.parse(JSON.stringify(fileOptions));
consumerOptions.filename =  '../logs/consumer.log';

var producerLogFileTransport = new (winston.transports.File)(producerOptions);
var consumerLogFileTransport = new (winston.transports.File)(consumerOptions);

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