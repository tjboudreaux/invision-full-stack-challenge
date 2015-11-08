var expect  = require('expect.js');
var sinon   = require('sinon');
var factory = require('../lib/expression-factory');

describe('ExpressionFactory', function(){

    it('should build proper expressions', function(){
        expect(factory.createExpression(24, 25, '+')).to.equal('24+25=');
    });

    it('should parse valid addition expressions properly', function(){
        var num = 10;
        sinon.stub(factory, 'getRandomInt', function() { num++; return num;});
        sinon.stub(factory, 'getRandomOperator', function() { return '+';});

        expect(factory.createRandomExpression()).to.equal('11+12=');
    });
});
