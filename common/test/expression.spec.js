var expect     = require('expect.js'),
    expression = require('../lib/expression');

describe('Expression', function(){

    it('should throw a type error for invalid expressions', function(){
        expect(function() { return new expression('abcde=')}).to.throwError(function(e){
            expect(e).to.be.a(TypeError);
            expect(e.toString()).to.equal('TypeError: abcde= is not a parsable mathematical expression.');
        });
    });

    it('should parse valid addition expressions properly', function(){
        var exp = new expression('123+12345=');
        expect(exp.valueA).to.equal('123');
        expect(exp.valueB).to.equal('12345');
        expect(exp.operator).to.equal('+');
    });

    it('should parse valid subtraction expressions properly', function(){
        var exp = new expression('123-12345=');
        expect(exp.valueA).to.equal('123');
        expect(exp.valueB).to.equal('12345');
        expect(exp.operator).to.equal('-');
    });

    it('should parse valid multiplication expressions properly', function(){
        var exp = new expression('123*12345=');
        expect(exp.valueA).to.equal('123');
        expect(exp.valueB).to.equal('12345');
        expect(exp.operator).to.equal('*');
    });

    it('should parse valid division expressions properly', function(){
        var exp = new expression('123/12345=');
        expect(exp.valueA).to.equal('123');
        expect(exp.valueB).to.equal('12345');
        expect(exp.operator).to.equal('/');
    });

    it('should parse expressions with whitespace properly', function(){
        var exp = new expression('123 / 12345 =');
        expect(exp.valueA).to.equal('123');
        expect(exp.valueB).to.equal('12345');
        expect(exp.operator).to.equal('/');
    });
});
