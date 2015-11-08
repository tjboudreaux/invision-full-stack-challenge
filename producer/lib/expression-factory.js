'use strict';

/**
 * A factory for generating mathematical expression strings.
 * @constructor
 */
var ExpressionFactory = function() {

    /**
     * Get a number between min and max.
     * @private
     * @param min
     * @param max
     * @returns {*}
     */
    this.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Get a random operator
     * @private
     * @returns {string}
     */
    this.getRandomOperator = function() {
        var operators = ['+', '-', '*', '/'];

        return operators[Math.floor(Math.random() * operators.length)];
    }
};

/**
 * Create an expression string by gluing together parameters in the proper order.
 * @param value1
 * @param value2
 * @param operator
 * @returns {string}
 */
ExpressionFactory.prototype.createExpression = function (value1, value2, operator) {
    return value1 + operator + value2 + '=';
};

/**
 * Create a random mathematical expression string.
 * @returns {string}
 */
ExpressionFactory.prototype.createRandomExpression = function() {

    var min = 1;
    var max = 1000;

    //get random values
    var value1 = this.getRandomInt(min, max);
    var value2 = this.getRandomInt(min, max);
    var operator = this.getRandomOperator();

    return this.createExpression(value1, value2, operator);
};


/**
 * A singleton expression factory that can be used for generating random strings of mathematical expressions.
 * @type {ExpressionFactory}
 */
module.exports = new ExpressionFactory();