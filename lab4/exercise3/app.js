var should = require('should');
var calc = require('./calculator');

//calc.addTwoNumbers("x", "y");

describe('Calculator', function() {
    
    describe ('when used synchronously', function() {

        it('should add two numbers correctly', function() {
              calc.addTwoNumbers(2,2).should.equal(4);  
        })
        it('should not equal to adding two numbers', function() {
                calc.addTwoNumbers(4,5).should.not.equal(4);      
        })
    })
});

describe('Calculator', function() {
    
    describe ('when used synchronously', function() {

        it('should substract two numbers correctly', function() {
              calc.subtractTwoNumbers(4,2).should.equal(2);  
        })
        it('should not equal to substracting two numbers', function() {
                calc.subtractTwoNumbers(7,5).should.not.equal(4);      
        })
    })
});

