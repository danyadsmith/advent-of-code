/* globals describe it beforeEach */

const expect = require('chai').expect;
const getNumLightsOn = require('../../src/06_ProbablyAFireHazard/').getNumLightsOn;
const traverseGrid = require('../../src/06_ProbablyAFireHazard/').traverseGrid;
Array.matrix = require('../../src/06_ProbablyAFireHazard/').matrix;
var smGrid, mdGrid;

describe('06. Probably A Fire Hazard', () => {
  beforeEach(() => {
    smGrid = Array.matrix(2, 2, false);
    mdGrid = Array.matrix(5, 5, 0);
  });

  describe('#Array.matrix(numRows, numCols, initial)', () => {
    it('should be a function', () => {
      expect(Array.matrix).to.be.a('function');
    });
    it('should return a two-dimensional array', () => {
      expect(smGrid).to.be.an('array');
      expect(smGrid[0]).to.be.an('array');
    });
    it('should populate each index in the 2D array with an initial value', () => {
      expect(smGrid[0][0]).to.be.false;
      expect(smGrid[0][1]).to.be.false;
      expect(smGrid[1][0]).to.be.false;
      expect(smGrid[1][1]).to.be.false;
      expect(mdGrid[0][0]).to.eql(0);
      expect(mdGrid[0][1]).to.eql(0);
      expect(mdGrid[0][2]).to.eql(0);
      expect(mdGrid[0][3]).to.eql(0);
      expect(mdGrid[0][4]).to.eql(0);
      expect(mdGrid[1][0]).to.eql(0);
      expect(mdGrid[1][1]).to.eql(0);
      expect(mdGrid[1][2]).to.eql(0);
      expect(mdGrid[1][3]).to.eql(0);
      expect(mdGrid[1][4]).to.eql(0);
      expect(mdGrid[2][0]).to.eql(0);
      expect(mdGrid[2][1]).to.eql(0);
      expect(mdGrid[2][2]).to.eql(0);
      expect(mdGrid[2][3]).to.eql(0);
      expect(mdGrid[2][4]).to.eql(0);
      expect(mdGrid[3][0]).to.eql(0);
      expect(mdGrid[3][1]).to.eql(0);
      expect(mdGrid[3][2]).to.eql(0);
      expect(mdGrid[3][3]).to.eql(0);
      expect(mdGrid[3][4]).to.eql(0);
      expect(mdGrid[4][0]).to.eql(0);
      expect(mdGrid[4][1]).to.eql(0);
      expect(mdGrid[4][2]).to.eql(0);
      expect(mdGrid[4][3]).to.eql(0);
      expect(mdGrid[4][4]).to.eql(0);
    });
  });

  describe('#traverseGrid(grid, instructions)', () => {
    it('should be a function', () => {
      expect(traverseGrid).to.be.a('function');
    });
    it('should return a two-dimensional array', () => {
      expect(traverseGrid(smGrid, 'turn on 0,0 through 999,999')).to.be.an('array');
      expect(traverseGrid(smGrid[0], 'turn on 0,0 through 999,999')).to.be.an('array');
    });
  });

  describe('#getNumLightsOn(input)', () => {
    it('should be a function', () => {
      expect(getNumLightsOn).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getNumLightsOn('turn on 0,0 through 999,999')).to.be.a('number');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        getNumLightsOn(true);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNumLightsOn(20);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNumLightsOn({});
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNumLightsOn(null);
      }).to.throw(TypeError, 'The parameter input must be a string.');
      expect(() => {
        getNumLightsOn(undefined);
      }).to.throw(TypeError, 'The parameter input must be a string.');
    });
    it('should return the number of lights on in the grid', () => {
      expect(getNumLightsOn('turn on 0,0 through 1,1', smGrid)).to.eql(4); 
    });
  });
});