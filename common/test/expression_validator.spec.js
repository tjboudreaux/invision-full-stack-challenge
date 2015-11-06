var expect              = require('expect.js'),
    ExpressionValidator = require('../lib/expression_validator');

describe('ExpressionValidator', function(){

    it('should validate expressions with spaces that are otherwise valid', function(){
        expect(ExpressionValidator.validate('2 + 3')).to.be.true;
    });


    it('should not validate expressions with illegal operators', function(){
        expect(ExpressionValidator.validate('2 ; 3')).to.be.false;
    });
});
