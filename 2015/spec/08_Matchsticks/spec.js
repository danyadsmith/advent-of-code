/* globals describe it beforeEach */
/* eslint-disable no-useless-escape */

const expect = require('chai').expect;
const calcNumCharsInCode = require('../../src/08_Matchsticks/').calcNumCharsInCode;
const calcNumCharsInMemory = require('../../src/08_Matchsticks/').calcNumCharsInMemory;
const calcDiffInChars = require('../../src/08_Matchsticks/').calcDiffInChars;
const trackGlobalStringCounts = require('../../src/08_Matchsticks/').trackGlobalStringCounts;
const globalCounter = require('../../src/08_Matchsticks/').globalCounter;

describe('08. Matchsticks', () => {
  describe('#calcNumCharsInMemory(str)', () => {
    it('should be a function', () => {
      expect(calcNumCharsInMemory).to.be.a('function');
    });
    it('should return a number', () => {
      expect(calcNumCharsInMemory('hello')).to.be.a('number');
    });
    it('returns the number of characters that a string will output as text', () => {
      expect(calcNumCharsInMemory('')).to.eql(0);
      expect(calcNumCharsInMemory('abc')).to.eql(3);
      expect(calcNumCharsInMemory('aaa\"aaa')).to.eql(7);
      expect(calcNumCharsInMemory('\x27')).to.eql(1);
    });
  });
  describe('#calcNumCharsInCode(str)', () => {
    it('should be a function', () => {
      expect(calcNumCharsInCode).to.be.a('function');
    });
    it('should return a number', () => {
      expect(calcNumCharsInCode('hello')).to.be.a('number');
    });
    it('returns the number of characters that a string will store in memory', () => {
      expect(calcNumCharsInCode('')).to.eql(2);
      expect(calcNumCharsInCode('abc')).to.eql(5);
      expect(calcNumCharsInCode('aaa\"aaa')).to.eql(10);
      expect(calcNumCharsInCode('\x27')).to.eql(6);
    });
  });
  describe('#calcDiffInChars(inMemCount, outputCount)', () => {
    it('should be a function', () => {
      expect(calcDiffInChars).to.be.a('function');
    });
    it('should return a number', () => {
      expect(calcDiffInChars()).to.be.a('number');
    });
    it('returns the difference between total characters in memory and total characters in output', () => {
      expect(calcDiffInChars()).to.eql(14);
    });
  });
});