/* globals describe it */

const expect = require('chai').expect;
const numHousesOnSantasRoute = require('../../src/03_PerfectlySphericalHousesInAVacuum/').numHousesOnSantasRoute;
const numHousesOnSplitRoute = require('../../src/03_PerfectlySphericalHousesInAVacuum/').numHousesOnSplitRoute;

describe('03. Perfectly Spherical Houses In A Vacuum', () => {
  describe('#numHousesOnSantasRoute(routeDirections)', () => {
    it('should be a function', () => {
      expect(numHousesOnSantasRoute).to.be.a('function');
    });
    it('should return a number', () => {
      expect(numHousesOnSantasRoute('>^')).to.be.a('number');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        numHousesOnSantasRoute(true);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSantasRoute(20);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSantasRoute({});
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSantasRoute(null);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSantasRoute(undefined);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
    });
    it('should return the number of houses Santa visits on the given route', () => {
      expect(numHousesOnSantasRoute('>')).to.eql(2);
      expect(numHousesOnSantasRoute('^>v<')).to.eql(4);
      expect(numHousesOnSantasRoute('^v^v^v^v^v')).to.eql(2);
    });
  });
  describe('#numHousesOnSplitRoute(routeDirections', () => {
    it('should be a function', () => {
      expect(numHousesOnSplitRoute).to.be.a('function');
    });
    it('should return a number', () => {
      expect(numHousesOnSplitRoute('^><<>')).to.be.a('number');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        numHousesOnSplitRoute(true);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSplitRoute(20);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSplitRoute({});
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSplitRoute(null);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
      expect(() => {
        numHousesOnSplitRoute(undefined);
      }).to.throw(TypeError, 'The parameter routeDirections must be a string.');
    });
    it('should return the number of houses Santa visits on the given route', () => {
      expect(numHousesOnSplitRoute('^v')).to.eql(3);
      expect(numHousesOnSplitRoute('^>v<')).to.eql(3);
      expect(numHousesOnSplitRoute('^v^v^v^v^v')).to.eql(11);
    });
  });
});
