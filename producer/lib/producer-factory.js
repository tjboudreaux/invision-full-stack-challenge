'use strict';

var Producer = require('./producer.js');
var common  = require('invision-common');
var logger  = common.logger.producer;

/**
 * A factory for creating producers.
 * @param consumerHost
 * @constructor
 */
var ProducerFactory = function(consumerHost) {
    this.consumerHost = consumerHost;
    console.log(this.consumerHost);
    this.nextUid = 1;
};

/**
 *
 * @returns {Producer}
 */
ProducerFactory.prototype.create = function() {
    var producer = new Producer(this.nextUid, this.consumerHost);
    logger.info("Creating producer " + this.nextUid);
    this.nextUid++;

    return producer;
};

module.exports = ProducerFactory;