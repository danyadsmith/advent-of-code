/* globals describe it */;

const expect = require('chai').expect;
const getLowestMatchingHashWithFiveLeadingZeros = require('../../src/04_TheIdealStockingStuffer/').getLowestMatchingHashWithFiveLeadingZeros;

describe('04. The Ideal Stocking Stuffer', () => {
  describe('#getLowestMatchingHashWithFiveLeadingZeros(input)', () => {
    it('should be a function', () => {
      expect(getLowestMatchingHashWithFiveLeadingZeros).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getLowestMatchingHashWithFiveLeadingZeros('abcdef')).to.be.a('number');
    }).timeout(5000);
    it('should return the lowest number that can be appended to the input that produces a hash that begins with five leading zeros', () => {
      expect(getLowestMatchingHashWithFiveLeadingZeros('abcdef')).to.eql(609043);
      expect(getLowestMatchingHashWithFiveLeadingZeros('pqrstuv')).to.eql(1048970);
    }).timeout(10000);
  });
});