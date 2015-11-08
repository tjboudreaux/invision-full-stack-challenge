/**
 * An object representation of a mathematical expression.
 * @module expression
 */

'use strict';

/**
 * A regular expression to match mathematical expression strings against.
 * @constant
 * @type {RegExp}
 */
var EXPRESSION_REGEX = /^(\d*)([+-\\\/*])(\d*)=$/;

/**
 * A list of valid operation types
 * @private
 * @type {string[]}
 */
var validOperations = ['+', '-', '*', '/'];

/**
 *
 * @param expressionString
 * @constructor
 */
var Expression = function(expressionString) {
    this.parseExpressionString(expressionString);
};

/**
 * Parse a mathematical expression string.
 * @throws {TypeError} if the expressionString can not be parsed as a mathematical expression.
 * @param expressionString
 */
Expression.prototype.parseExpressionString = function(expressionString)
{
    //replace whitespace
    expressionString = expressionString.replace(/\s*/g, '');

    if (!EXPRESSION_REGEX.test(expressionString)) {
        throw new TypeError(expressionString + ' is not a parsable mathematical expression.');
    }

    var matches = EXPRESSION_REGEX.exec(expressionString);

    this.valueA = matches[1];
    this.operator = matches[2];
    this.valueB = matches[3];

};

/**
 * @description Evaluate a simple mathematical expression.
 * @throws {TypeError} if the expression operation is invalid
 * @throws {TypeError} if either value of the expression is not a number.
 * @returns {Object}
 */
Expression.prototype.evaluate = function() {
    return eval(this.valueA.toString() + this.operator + this.valueB.toString());
};


module.exports = Expression;