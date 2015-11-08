'use strict';

var requestPromise = require('request-promise');
var expressionFactory = require('./expression-factory');
var common  = require('invision-common');
var logger  = common.logger.producer;

/**
 *
 * @param uid
 * @param consumerHost
 * @constructor
 */
var Producer = function(uid, consumerHost) {
    this.uid = uid;
    this.consumerHost = consumerHost;
};

/**
 * Push an expression onto the consumer queue via an HTTP request.
 * @returns {*}
 */
Producer.prototype.push = function() {

    //create the payload
    var payload = {
        expression: expressionFactory.createRandomExpression(),
        producerId: this.uid
    };



    var requestOptions = {
        method: 'POST',
        uri: this.consumerHost,
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    };

    logger.info("Producer [" + this.uid + "] - sending new expression [" + payload.expression + "] to consumer" );

    //create the request promise
    return requestPromise(requestOptions);
};

module.exports = Producer;