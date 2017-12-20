/* globals describe it */

const expect = require('chai').expect;
const calcWrappingPaperOrder = require('../../src/02_IWasToldThereWouldBeNoMath/').calcWrappingPaperOrder;
const calcRibbonOrder = require('../../src/02_IWasToldThereWouldBeNoMath/').calcRibbonOrder;

describe('02. I Was Told There Would Be No Math', () => {
  describe('#calcWrappingPaperOrder(boxDimensionsList)', () => {
    it('should be a function', () => {
      expect(calcWrappingPaperOrder).to.be.a('function');
    });
    it('should return a number', () => {
      expect(calcWrappingPaperOrder('3x2x10')).to.be.a('number');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        calcWrappingPaperOrder(true);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcWrappingPaperOrder(20);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcWrappingPaperOrder({});
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcWrappingPaperOrder(null);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcWrappingPaperOrder(undefined);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
    });
    it('should return the total square feet of wrapping paper the elves should order', () => {
      expect(calcWrappingPaperOrder('2x3x4')).to.eql(58);
      expect(calcWrappingPaperOrder('1x1x10')).to.eql(43);
      expect(calcWrappingPaperOrder('2x3x4\n1x1x10')).to.eql(101);
      expect(calcWrappingPaperOrder('2x3x4\n1x1x10\n2x3x4\n1x1x10')).to.eql(202);
    });
  });
  describe('#calcRibbonOrder(boxDimensionsList)', () => {
    it('should be a function', () => {
      expect(calcRibbonOrder).to.be.a('function');
    });
    it('should return a number', () => {
      expect(calcRibbonOrder('3x2x10')).to.be.a('number');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        calcRibbonOrder(true);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcRibbonOrder(20);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcRibbonOrder({});
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcRibbonOrder(null);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
      expect(() => {
        calcRibbonOrder(undefined);
      }).to.throw(TypeError, 'The parameter boxDimensionsList must be a string.');
    });
    it('should return the total square feet of wrapping paper the elves should order', () => {
      expect(calcRibbonOrder('2x3x4')).to.eql(34);
      expect(calcRibbonOrder('1x1x10')).to.eql(14);
      expect(calcRibbonOrder('2x3x4\n1x1x10')).to.eql(48);
      expect(calcRibbonOrder('2x3x4\n1x1x10\n2x3x4\n1x1x10')).to.eql(96);
    });    
  });
});