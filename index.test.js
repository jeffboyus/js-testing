var expect = require('chai').expect;

var util = require('./index');

describe('is mocha and chai working?', function () {
    it('should validate truthy', function () {
        expect(true).to.be.true;
    });
});

describe('Convert OPWHSE phone numbers', function () {

    it('should throw an error if the input is not a string or integer', () => {
        // This will not work. When a piece of code can raise an error, Chai needs to
        // capture it within its assertion. Therefore we just wrap the call in an
        // annonymous function to be able to test the error that was thrown.
        // var result = convert([1,2,3]);
        // expect(result).to.throw('invalid input type');

        expect(function () { util.convert([1,2,3]) }).to.throw('invalid input type');
    });

    it('should return a string when passing in a string', function () {
        var result = util.convert('1234');
        expect(result).to.be.a('string');
    });

    it('should return a string when passing in an integer', function () {
        var result = util.convert(1234);
        expect(result).to.be.a('string');
    });

});
