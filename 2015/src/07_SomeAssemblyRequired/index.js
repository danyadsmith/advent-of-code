function parseInstructions (input, override) {
  if (typeof input === 'string') {
    if (override) {
      if (typeof override === 'string') {
        input = input.replace(/19138 -> b/, override);
      } else {
        throw new TypeError('The parameter override must be a string.');
      }
    }
    return input.split('\n').map(instruction => instruction.replace(/^(\w*)\s-\W\s(\w*)/gm, 'ASSIGN, $1, $2')).map(instruction => instruction.replace(/^([A-Z]*)\s(\w*)\s-\W\s(\w*)/gm, '$1, $2, $3')).map(instruction => instruction.replace(/^(\w*)\s([A-Z]*)\s(\w*)\s-\W\s(\w*)/gm, '$2, $1, $3, $4')).map(instruction => instruction.split(', ')).map(arr => arr.map(str => isNaN(str) ? str : parseInt(str)));
  } else {
    throw new TypeError('The parameter input must be a string.');
  }
}

function createWireSignalsDictionary (instructions) {
  var wires = [];

  instructions.forEach(arr => {
    for (let i=1; i<arr.length; i++) {
      if (isNaN(arr[i]) && wires.indexOf(arr[i]) === -1) { wires.push(arr[i]); }
    }
  });

  wires = wires.sort();

  var wireSignals = {};

  wires.forEach(str => wireSignals[str] = null);

  return wireSignals;
}

function calcBitwiseOR (dict, signal, o1, o2) {
  var x = (isNaN(o1)) ? dict[o1] : o1;
  var y = (isNaN(o2)) ? dict[o2] : o2;
  if (x !== null && y !== null) {
    dict[signal] = x | y;
    return dict[signal];
  }
}

function calcBitwiseAND (dict, signal, o1, o2) {
  var x = (isNaN(o1)) ? dict[o1] : o1;
  var y = (isNaN(o2)) ? dict[o2] : o2;
  if (x !== null) {
    dict[signal] = x & y;
    return dict[signal];
  }
}

function calcBitwiseNOT (dict, signal, o1) {
  var x = (isNaN(o1)) ? dict[o1] : o1;
  if (x !== null) {
    dict[signal] = (65536 + (~ x));
    return dict[signal];
  }
}

function calcBitwiseLSHIFT (dict, signal, o1, o2) {
  var x = (isNaN(o1)) ? dict[o1] : o1;
  var y = (isNaN(o2)) ? dict[o2] : o2;
  if (x !== null && y !== null) {
    dict[signal] = (x << y);
    return dict[signal];
  }
}

function calcBitwiseRSHIFT (dict, signal, o1, o2) {
  var x = (isNaN(o1)) ? dict[o1] : o1;
  var y = (isNaN(o2)) ? dict[o2] : o2;
  if (x !== null && y !== null) {
    dict[signal] = (x >> y);
    return dict[signal];
  }
}

function assignValue (dict, signal, o1) {
  var x = (isNaN(o1)) ? dict[o1] : o1;
  if (x !== null) {
    dict[signal] = x;
    return dict[signal];
  }
}

function performCalculations (instructions, dict) {

  instructions.forEach(arr => {
    switch (arr[0]) {
    case 'AND':
      calcBitwiseAND(dict, arr[3], arr[1], arr[2]);
      break;
    case 'OR':
      calcBitwiseOR(dict, arr[3], arr[1], arr[2]);
      break;
    case 'NOT':
      calcBitwiseNOT(dict, arr[2], arr[1]);
      break;
    case 'LSHIFT':
      calcBitwiseLSHIFT(dict, arr[3], arr[1], arr[2]);
      break;
    case 'RSHIFT':
      calcBitwiseRSHIFT(dict, arr[3], arr[1], arr[2]);
      break;
    case 'ASSIGN':
      assignValue(dict, arr[2], arr[1]);
      break;
    }
  });
  
}

function calcWireSignals (instructions, dict) {
  for (let i = 0; i < instructions.length; i++) {
    performCalculations(instructions, dict);
  }
}

function getWireSignal (input, wire, override) {
  var instructions = parseInstructions(input, override);
  var dict = createWireSignalsDictionary(instructions);
  calcWireSignals(instructions, dict);
  return dict[wire];
}

module.exports = {
  parseInstructions: parseInstructions,
  createWireSignalsDictionary: createWireSignalsDictionary,
  calcBitwiseAND: calcBitwiseAND,
  calcBitwiseLSHIFT: calcBitwiseLSHIFT,
  calcBitwiseNOT: calcBitwiseNOT,
  calcBitwiseOR: calcBitwiseOR,
  calcBitwiseRSHIFT: calcBitwiseRSHIFT,
  assignValue: assignValue,
  performCalculations: performCalculations,
  calcWireSignals: calcWireSignals,
  getWireSignal: getWireSignal
};
