/* globals describe it beforeEach */

const expect = require('chai').expect;
const parseInstructions = require('../../src/07_SomeAssemblyRequired/').parseInstructions;
const createWireSignalsDictionary = require('../../src/07_SomeAssemblyRequired/').createWireSignalsDictionary;
const calcBitwiseAND = require('../../src/07_SomeAssemblyRequired/').calcBitwiseAND;
const calcBitwiseLSHIFT = require('../../src/07_SomeAssemblyRequired/'). calcBitwiseLSHIFT;
const calcBitwiseNOT = require('../../src/07_SomeAssemblyRequired/'). calcBitwiseNOT;
const calcBitwiseOR = require('../../src/07_SomeAssemblyRequired/'). calcBitwiseOR;
const calcBitwiseRSHIFT = require('../../src/07_SomeAssemblyRequired/'). calcBitwiseRSHIFT;
const assignValue = require('../../src/07_SomeAssemblyRequired/'). assignValue;
const performCalculations = require('../../src/07_SomeAssemblyRequired/'). performCalculations;
const calcWireSignals = require('../../src/07_SomeAssemblyRequired/'). calcWireSignals;
const getWireSignal = require('../../src/07_SomeAssemblyRequired/'). getWireSignal;
var input, override, instructions, dict;

describe('07. Some Assembly Required', () => {

  beforeEach(() => {
    input = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;
    override = '16076 -> b';
    instructions = parseInstructions(input);
    dict = createWireSignalsDictionary(instructions);
  });

  describe('#parseInstructions(input, override)', () => {
    it('should be a function', () => {
      expect(parseInstructions).to.be.a('function');
    });
    it('should return a two-dimensional array', () => {
      expect(parseInstructions(input)).to.be.an('array');
      expect(parseInstructions(input)[0]).to.be.an('array');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        parseInstructions(true, override);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        parseInstructions(20, override);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        parseInstructions({}, override);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        parseInstructions(null, override);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        parseInstructions(undefined, override);
      }).to.throw(TypeError, 'The parameter input must be a string.');
    });
    it('should throw an error when the second parameter is not a string', () => {
      expect(() => {
        parseInstructions(input, true);
      }).to.throw(TypeError, 'The parameter override must be a string.');
      expect(() => {
        parseInstructions(input, 123);
      }).to.throw(TypeError, 'The parameter override must be a string.');
      expect(() => {
        parseInstructions(input, {});
      }).to.throw(TypeError, 'The parameter override must be a string.');
    });
    it('should contain a bitwise function keyword in the first index of each subarray', () => {
      expect(parseInstructions(input, override)[0][0]).to.eql('ASSIGN');
      expect(parseInstructions(input, override)[2][0]).to.eql('AND');
      expect(parseInstructions(input, override)[3][0]).to.eql('OR');
      expect(parseInstructions(input, override)[4][0]).to.eql('LSHIFT');
      expect(parseInstructions(input, override)[5][0]).to.eql('RSHIFT');
      expect(parseInstructions(input, override)[6][0]).to.eql('NOT');
    });
  });

  describe('#createWireSignalsDictionary (instructions)', () => {
    it('should be a function', () => {
      expect(createWireSignalsDictionary).to.be.a('function');
    });
    it('should return an object', () => {
      expect(createWireSignalsDictionary(parseInstructions(input))).to.be.an('object');
    });
  });

  describe('#calcBitwiseAND(dict, signal, o1, o2)', () => {
    it('should be a function', () => {
      expect(calcBitwiseAND).to.be.a('function');
    });
    it('should return a number between 0 and 65535', () => {
      expect(calcBitwiseAND(dict, 'd', 123, 456)).to.be.a('number');
      expect(calcBitwiseAND(dict, 'd', 123, 456)).to.be.above(-1);
      expect(calcBitwiseAND(dict, 'd', 123, 456)).to.be.below(65536);
    });
    it('should return the result of performing a bitwise AND on the two operands', () => {
      expect(calcBitwiseAND(dict, 'd', 123, 456)).to.eql(72);
    });
  });

  describe('#calcBitwiseLSHIFT(dict, signal, o1, o2)', () => {
    it('should be a function', () => {
      expect(calcBitwiseLSHIFT).to.be.a('function');
    });
    it('should return a number between 0 and 65535', () => {
      expect(calcBitwiseLSHIFT(dict, 'f', 123, 2)).to.be.a('number');
      expect(calcBitwiseLSHIFT(dict, 'f', 123, 2)).to.be.above(-1);
      expect(calcBitwiseLSHIFT(dict, 'f', 123, 2)).to.be.below(65536);
    });
    it('should return the result of performing a bitwise LSHIFT on the two operands', () => {
      expect(calcBitwiseLSHIFT(dict, 'f', 123, 2)).to.eql(492);
    });
  });

  describe('#calcBitwiseNOT(dict, signal, o1)', () => {
    it('should be a function', () => {
      expect(calcBitwiseNOT).to.be.a('function');
    });
    it('should return a number between 0 and 65535', () => {
      expect(calcBitwiseNOT(dict, 'h', 123)).to.be.a('number');
      expect(calcBitwiseNOT(dict, 'h', 123)).to.be.above(-1);
      expect(calcBitwiseNOT(dict, 'h', 123)).to.be.below(65536);
    });
    it('should return the result of performing a bitwise NOT on the operand', () => {
      expect(calcBitwiseNOT(dict, 'h', 123)).to.eql(65412);
    });
  });

  describe('#calcBitwiseOR(dict, signal, o1, o2)', () => {
    it('should be a function', () => {
      expect(calcBitwiseOR).to.be.a('function');
    });
    it('should return a number between 0 and 65535', () => {
      expect(calcBitwiseOR(dict, 'e', 123, 456)).to.be.a('number');
      expect(calcBitwiseOR(dict, 'e', 123, 456)).to.be.above(-1);
      expect(calcBitwiseOR(dict, 'e', 123, 456)).to.be.below(65536);
    });
    it('should return the result of performing a bitwise OR on the two operands', () => {
      expect(calcBitwiseOR(dict, 'e', 123, 456)).to.eql(507);
    });
  });
  
  describe('#calcBitwiseRSHIFT(dict, signal, o1, o2)', () => {
    it('should be a function', () => {
      expect(calcBitwiseRSHIFT).to.be.a('function');
    });
    it('should return a number between 0 and 65535', () => {
      expect(calcBitwiseRSHIFT(dict, 'g', 456, 2)).to.be.a('number');
      expect(calcBitwiseRSHIFT(dict, 'g', 456, 2)).to.be.above(-1);
      expect(calcBitwiseRSHIFT(dict, 'g', 456, 2)).to.be.below(65536);
    });
    it('should return the result of performing a bitwise RSHIFT on the two operands', () => {
      expect(calcBitwiseRSHIFT(dict, 'g', 456, 2)).to.eql(114);
    });
  });

  describe('#assignValue(dict, signal, o1)', () => {
    it('should be a function', () => {
      expect(assignValue).to.be.a('function');
    });
    it('should return a number between 0 and 65535', () => {
      expect(assignValue(dict, 'x', 123)).to.be.a('number');
      expect(assignValue(dict, 'x', 123)).to.be.above(-1);
      expect(assignValue(dict, 'x', 123)).to.be.below(65536);
    });
    it('should return the result of the assignment', () => {
      expect(assignValue(dict, 'x', 123)).to.eql(123);
      expect(assignValue(dict, 'y', 456)).to.eql(456);
    });
  });

  describe('#performCalculations(instructions, dict)', () => {
    it('should be a function', () => {
      expect(performCalculations).to.be.a('function');
    });
  });

  describe('#calcWireSignals(instructions, dict)', () => {
    it('should be a function', () => {
      expect(calcWireSignals).to.be.a('function');
    });
  });
  
  describe('#getWireSignal(input, wire, override)', () => {
    it('should be a function', () => {
      expect(getWireSignal).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getWireSignal(input, 'd')).to.be.a('number');
    });
    it('should return the right signal for a given wire', () => {
      expect(getWireSignal(input, 'd')).to.eql(72);
      expect(getWireSignal(input, 'e')).to.eql(507);
      expect(getWireSignal(input, 'f')).to.eql(492);
      expect(getWireSignal(input, 'g')).to.eql(114);
      expect(getWireSignal(input, 'h')).to.eql(65412);
      expect(getWireSignal(input, 'i')).to.eql(65079);
    });
  });

});