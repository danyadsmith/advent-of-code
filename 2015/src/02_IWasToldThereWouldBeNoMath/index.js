function calcWrappingPaperOrder (boxDimensionsList) {
  if (typeof boxDimensionsList === 'string') {
    var totalSqFeet = 0;
    var boxDimensionsCollection = boxDimensionsList.split('\n');
    boxDimensionsCollection.forEach(box => {
      totalSqFeet = totalSqFeet + calcBoxSurfaceArea(box);
    });
    return totalSqFeet;
  } else {
    throw new TypeError('The parameter boxDimensionsList must be a string.');
  }
}

function calcBoxSurfaceArea (boxDimensions) {
  const dimensions = boxDimensions.split('x');
  const l = dimensions[0];
  const w = dimensions[1];
  const h = dimensions[2];
  const areaOfSides = [(l * w), (w * h), (h * l)];
  const surfaceAreaPlusSlack = areaOfSides.reduce((accumulator, areaOfSide) => {
    return accumulator + (2 * areaOfSide)}, Math.min(...areaOfSides));
  return surfaceAreaPlusSlack;
}

function calcRibbonOrder (boxDimensionsList) {
  if (typeof boxDimensionsList === 'string') {
    var totalFeet = 0;
    var boxDimensionsCollection = boxDimensionsList.split('\n');
    totalFeet = boxDimensionsCollection
      .map(box => calcBoxRibbonLength(box))
      .reduce((accumulator, boxRibbonLength) => accumulator + boxRibbonLength);
    return totalFeet;
  } else {
    throw new TypeError('The parameter boxDimensionsList must be a string.');
  }
}

function calcBoxRibbonLength (boxDimensions) {
  const dimensions = boxDimensions.split('x').sort((a, b) => a - b);
  const l = Number(dimensions[0]);
  const w = Number(dimensions[1]);
  const h = Number(dimensions[2]);
  const ribbonLength = (l + l + w + w);
  const bowLength = (l * w * h);
  return ribbonLength + bowLength;
}

module.exports = {
  calcWrappingPaperOrder: calcWrappingPaperOrder,
  calcBoxSurfaceArea: calcBoxSurfaceArea,
  calcRibbonOrder: calcRibbonOrder,
  calcBoxRibbonLength: calcBoxRibbonLength
}