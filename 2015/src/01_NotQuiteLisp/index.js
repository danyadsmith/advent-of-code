function findTheFloor (directions) {
  if (typeof directions === 'string') {
    var parseDirections = function (directions, dirType) {
      return directions.split('').filter(char => char === dirType).length;
    }
    const upFloors = parseDirections(directions, '(');
    const downFloors = parseDirections(directions, ')');
    return upFloors - downFloors;
  } else {
    throw new TypeError('The parameter directions must be a string.');
  }
}

function firstBasementVisit (stairsToClimb) {
  if (typeof stairsToClimb == 'string') {
    var stepByStepDirections = stairsToClimb.split('');
    var currentFloor = 0;
    for (let i = 0; i < stepByStepDirections.length; i = i + 1) {
      switch (stepByStepDirections[i]) {
        case '(':
        currentFloor = currentFloor + 1;
        break;
        case ')':
        currentFloor = currentFloor - 1;
        break;
        default:
        break;
      }
      if (currentFloor === -1) {
        return i + 1;
      }
    }
    return -1;
  } else {
    throw new TypeError('The parameter stairsToClimb must be a string.');
  }
}

module.exports = {
  findTheFloor: findTheFloor,
  firstBasementVisit: firstBasementVisit
};