const chai = require('chai');
let should = chai.should();

const lib = require('../lib')
const validator = require('../lib/validator')


describe('Data extractor validation testing', function() {
    it('It should throw error if json is not passed as input to validator', function(done) {
        const errorMessage = 'input is not a valid json object';
        (() => validator.assertInputDataType(null)).should.throw(Error, errorMessage);
        (() => validator.assertInputDataType('')).should.throw(Error, errorMessage);
        (() => validator.assertInputDataType(undefined)).should.throw(Error, errorMessage);
        (() => validator.assertInputDataType((function() {}))).should.throw(Error, errorMessage);
        (() => validator.assertInputDataType(10)).should.throw(Error, errorMessage);
        done();
    });
    it('It should throw error if mandatory fields are not provided', function(done) {
        (() => validator.assertInputParameters({})).should.throw(Error);
        done();
    });
});