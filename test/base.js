const chai = require('chai');
let should = chai.should();

const lib = require('../lib')

describe('Data extractor base function testing', function() {
    it('It should return library function', function(done) {
        lib.should.be.a('function')
        done()
    });
    it('It should return true', function(done) {
        lib().should.be.eq(true)
        done()
    });
});