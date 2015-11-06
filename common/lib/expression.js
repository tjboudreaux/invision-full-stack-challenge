'use strict';

/**
 * @description A list of valid operation types
 * @private
 * @type {string[]}
 */
var validOperations = ['+', '-', '*', '/'];


var Expression = function(expressionString) {

};

/**
 * @description Evaluate a simple mathematical expression.
 * @throws {TypeError} if the expression operation is invalid
 * @throws {TypeError} if either value of the expression is not a number.
 * @returns {Object}
 */
Expression.prototype.evaluate = function() {

    if (validOperations.indexOf(operator) == -1) {
        throw new TypeError('Operator "' + operator + '" is invalid');
    }

    if (typeof valueA != Number ||
        typeof valueA != Number
    ) {
        throw new TypeError ("Values must be a valid number");
    }

    return eval(valueA.toString() + operator + valueB.toString());
};


module.exports = Expression;