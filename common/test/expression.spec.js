var expect     = require('expect.js'),
    expression = require('../lib/expression');

describe('ExpressionValidator', function(){

    it('should throw a type error for invalid operations', function(){
        expect(expression.evaluate('a', '102', '105').to.throw.Exception(function(e){
            expect(e).to.be.a(TypeError);
        }));
    });
});
