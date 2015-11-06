'use strict';

/**
 * A regular expression to match mathematical expression strings against.
 * @type {RegExp}
 */
var expressionRegex = /^(\d*)([+-\\\/*])(\d*)=$/;

/**
 * @description A list of valid operation types
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
 * @description Parse a mathematical expression string.
 * @param expressionString
 */
Expression.prototype.parseExpressionString = function(expressionString)
{
    //replace whitespace
    expressionString = expressionString.replace(/\s*/g, '');

    if (!expressionRegex.test(expressionString)) {
        throw new TypeError(expressionString + ' is not a parsable mathematical expression.');
    }

    var matches = expressionRegex.exec(expressionString);

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

    if (validOperations.indexOf(this.operator) == -1) {
        throw new TypeError('Operator "' + this.operator + '" is invalid');
    }

    if (typeof this.valueA != Number ||
        typeof this.valueB != Number
    ) {
        throw new TypeError ("Values must be a valid number");
    }

    return eval(valueA.toString() + operator + valueB.toString());
};


module.exports = Expression;