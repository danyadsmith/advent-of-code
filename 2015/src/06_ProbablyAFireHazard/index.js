function matrix (numRows, numCols, initial) {
  var arr = [];
  for (var i = 0; i < numRows; ++i) {
    var columns = [];
    for (var j = 0; j < numCols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

Array.matrix = matrix;

function getNumLightsOn (input, grid) {
  if (typeof input === 'string') {
    var instructions = input.split('\n')
      .map(str => str.split(' '))
      .map(arr => (arr.length === 5) ? arr.slice(1) : arr);
    
    var lightGrid = grid || Array.matrix(1000, 1000, false);
    var stateOfLights = countLightsByState(lightGrid);

    instructions.forEach(instruction => {
      lightGrid = traverseGrid(lightGrid, instruction);
      stateOfLights = countLightsByState(lightGrid);
    });

    return stateOfLights['on'];

  } else {
    throw new TypeError('The parameter input must be a string.');
  }
}

function getTotalBrightness (input, grid) {
  if (typeof input === 'string') {
    var instructions = input.split('\n')
      .map(str => str.split(' '))
      .map(arr => (arr.length === 5) ? arr.slice(1) : arr);
    
    var lightGrid = grid || Array.matrix(1000, 1000, false);
    var stateOfLights = countLightsByState(lightGrid);
    
    instructions.forEach(instruction => {
      lightGrid = adjustBrightness(lightGrid, instruction);
      stateOfLights = countLightsByState(lightGrid);
    });

    return stateOfLights['brightness'];
  } else {
    throw new TypeError('The parameter input must be a string.');
  }
}

function countLightsByState (grid) {
  var stateOfLights = { on: 0, off: 0, brightness: 0 };
  grid.forEach(arr => {
    arr.forEach(item => {
      switch (item) {
      case (typeof item === 'boolean' && item == true): 
        stateOfLights['on'] += 1;
        break;
      case (typeof item === 'boolean' && item == false):
        stateOfLights['off'] += 1;
        break;
      default:
        stateOfLights['brightness'] += item;
        break;
      }
    });
  });
  return stateOfLights;
}

function printGrid (grid) {
  var gridLine;
  for (let y = 0; y < grid.length; y++) {
    gridLine = '';
    for (let x = 0; x < grid[0].length; x++) {
      gridLine += (grid[x][y]) ? '◼︎' : '◻︎';
    }
    console.log(gridLine);
  }
}

function traverseGrid (grid, instruction) {
  var action = instruction[0];
  var firstCoordinatePair = instruction[1].split(',');
  var secondCoordinatePair = instruction[3].split(',');
  var xStart = Math.min(firstCoordinatePair[0], secondCoordinatePair[0]);
  var xEnd = Math.max(firstCoordinatePair[0], secondCoordinatePair[0]);
  var yStart = Math.min(firstCoordinatePair[1], secondCoordinatePair[1]);
  var yEnd = Math.max(firstCoordinatePair[1], secondCoordinatePair[1]);

  for (let x = xStart; x <= xEnd; x++) {
    for (let y = yStart; y <= yEnd; y++) {
      switch (action) {
      case 'toggle':
        grid[x][y] = !grid[x][y];
        break;
      case 'on':
        grid[x][y] = true;
        break;
      case 'off':
        grid[x][y] = false;
        break;
      }
    }
  }

  return grid;
}

function adjustBrightness (grid, instruction) {
  var action = instruction[0];
  var firstCoordinatePair = instruction[1].split(',');
  var secondCoordinatePair = instruction[3].split(',');
  var xStart = Math.min(firstCoordinatePair[0], secondCoordinatePair[0]);
  var xEnd = Math.max(firstCoordinatePair[0], secondCoordinatePair[0]);
  var yStart = Math.min(firstCoordinatePair[1], secondCoordinatePair[1]);
  var yEnd = Math.max(firstCoordinatePair[1], secondCoordinatePair[1]);

  for (let x = xStart; x <= xEnd; x++) {
    for (let y = yStart; y <= yEnd; y++) {
      switch (action) {
      case 'toggle':
        grid[x][y] = grid[x][y] + 2;
        break;
      case 'on':
        grid[x][y] = grid[x][y] + 1;
        break;
      case 'off':
        grid[x][y] = Math.max(grid[x][y] - 1, 0);
        break;
      }
    }
  }

  return grid;  
}

module.exports = {
  countLightsByState: countLightsByState,
  getNumLightsOn: getNumLightsOn,
  traverseGrid: traverseGrid,
  matrix: matrix,
  printGrid: printGrid,
  getTotalBrightness: getTotalBrightness,
  adjustBrightness: adjustBrightness
};