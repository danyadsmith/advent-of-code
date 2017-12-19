/* globals describe it */

const expect = require('chai').expect;
const findTheFloor = require('../../src/01_NotQuiteLisp/').findTheFloor;
const firstBasementVisit = require('../../src/01_NotQuiteLisp/').firstBasementVisit;

describe('01. Not Quite Lisp', () => {
  describe('#findTheFloor(stairsToClimb)', () => {
    it('should be a function', () => {
      expect(findTheFloor).to.be.a('function');
    });
    it('should return a number', () => {
      expect(findTheFloor('(())(')).to.be.a('number');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        findTheFloor(true);
      }).to.throw(TypeError, 'The parameter directions must be a string.');
      expect(() => {
        findTheFloor(20);
      }).to.throw(TypeError, 'The parameter directions must be a string.');
      expect(() => {
        findTheFloor({});
      }).to.throw(TypeError, 'The parameter directions must be a string.');
      expect(() => {
        findTheFloor(null);
      }).to.throw(TypeError, 'The parameter directions must be a string.');
      expect(() => {
        findTheFloor(undefined);
      }).to.throw(TypeError, 'The parameter directions must be a string.');
    });
    it('should return the correct floor Santa should arrive at after following the directions', () => {
      expect(findTheFloor('(())')).to.eql(0);
      expect(findTheFloor('()()')).to.eql(0);
      expect(findTheFloor('(((')).to.eql(3);
      expect(findTheFloor('(()(()(')).to.eql(3);
      expect(findTheFloor('))(((((')).to.eql(3);
      expect(findTheFloor('())')).to.eql(-1);
      expect(findTheFloor('))(')).to.eql(-1); 
      expect(findTheFloor(')))')).to.eql(-3); 
      expect(findTheFloor(')())())')).to.eql(-3);
      expect(findTheFloor('(((((((((()')).to.eql(9); 
    });
    it('should ignore characters that do not represent steps', () => {
      expect(findTheFloor('(directions)')).to.eql(0);
      expect(findTheFloor('((/(((')).to.eql(5);
    });
  });
  describe('#firstBasementVisit(directions)', () => {
    it('should be a function', () => {
      expect(firstBasementVisit).to.be.a('function');
    });
    it('should return a number', () => {
      expect(firstBasementVisit('(())')).to.be.a('number');
    })
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        firstBasementVisit(true);
      }).to.throw(TypeError, 'The parameter stairsToClimb must be a string.');
      expect(() => {
        firstBasementVisit(20);
      }).to.throw(TypeError, 'The parameter stairsToClimb must be a string.');
      expect(() => {
        firstBasementVisit({});
      }).to.throw(TypeError, 'The parameter stairsToClimb must be a string.');
      expect(() => {
        firstBasementVisit(null);
      }).to.throw(TypeError, 'The parameter stairsToClimb must be a string.');
      expect(() => {
        firstBasementVisit(undefined);
      }).to.throw(TypeError, 'The parameter stairsToClimb must be a string.');
    });
    it('should return the position at which the directions lead to the basement', () => {
      expect(firstBasementVisit(')')).to.eql(1);
      expect(firstBasementVisit('()())')).to.eql(5);
    });
    it('should return -1 if the directions never lead to the basement', () => {
      expect(firstBasementVisit('((())')).to.eql(-1);
      expect(firstBasementVisit('((((((((((')).to.eql(-1);
    });
  })
});