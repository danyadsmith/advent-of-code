/* globals describe it */

const expect = require('chai').expect;
const getNiceStringCount = require('../../src/05_DoesntHeHaveInternElvesForThis/').getNiceStringCount;
const isNiceString = require('../../src/05_DoesntHeHaveInternElvesForThis/').isNiceString;

describe('getNiceStringCount', () => {
  describe('#getNiceStringCount(input)', () => {
    it('should be a function', () => {
      expect(getNiceStringCount).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getNiceStringCount('aei')).to.be.a('number');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        getNiceStringCount(true);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNiceStringCount(20);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNiceStringCount({});
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNiceStringCount(null);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNiceStringCount(undefined);
      }).to.throw(TypeError, 'The parameter input must be a string.');
    });
    it('should count the strings that meet nice criteria', () => {
      expect(getNiceStringCount('ugknbfddgicrmopn')).to.eql(1);
      expect(getNiceStringCount('aaa')).to.eql(1);
      expect(getNiceStringCount('jchzalrnumimnmhp')).to.eql(0);
      expect(getNiceStringCount('haegwjzuvuyypxyu')).to.eql(0);
      expect(getNiceStringCount('ugknbfddgicrmopn\naaa\njchzalrnumimnmhp')).to.eql(2);
    });
  });
  describe('#isNiceString(str)', () => {
    it('should be a function', () => {
      expect(isNiceString).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isNiceString('abc')).to.be.a('boolean');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        isNiceString(true);
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        isNiceString(20);
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        isNiceString({});
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        isNiceString(null);
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        isNiceString(undefined);
      }).to.throw(TypeError, 'The parameter str must be a string.');
    });
    it('should return true when the string is a Nice string', () =>{
      expect(isNiceString('ugknbfddgicrmopn')).to.be.true;
      expect(isNiceString('aaa')).to.be.true;
    });
    it('should return false when the string is a Naughty string', () => {
      expect(isNiceString('jchzalrnumimnmhp')).to.be.false;
      expect(isNiceString('haegwjzuvuyypxyu')).to.be.false;
    });
  });
});