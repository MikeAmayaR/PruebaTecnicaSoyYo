let chai = require('chai');
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;
let entities = require('../entities.js');

let result;
describe('Testing assert function: ', function () {
    describe('Check addTest Function', function () {
        it('Check the returned value using : assert.equal(value, value): ', function () {
            result = entities.addTest(2, 4);
            assert(result, [2, 3, 4]);
        });
    });
})

describe('Testing should function: ', function () {
    describe('Check addTest Function', function () {
        it('Check the returned value using : result.should.be.equal(value): ', function () {
            result = entities.addTest(1, 5);
            result.should.have.toString([1, 2, 3, 4, 5]);
        })
    })
})

describe('Testing expect function: ', function () {
    describe('Check addTest Function', function () {
        it('Check the returned value using : expect(result).to.be.a(value);: ', function () {
            result = entities.addTest(2, 10);
            expect([2, 3, 4, 5, 6, 7, 8, 9, 10]);
        })
    })
})