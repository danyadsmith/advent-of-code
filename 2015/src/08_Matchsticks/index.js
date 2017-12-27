var globalCounter = trackGlobalStringCounts();

function trackGlobalStringCounts () {
  let counts = {};
  counts.inMemory = [];
  counts.inCode = [];
  return counts;
}

function calcNumCharsInMemory (str) {
  let currStringLength = str.length;
  globalCounter.inMemory.push(currStringLength);
  return globalCounter.inMemory[globalCounter.inMemory.length - 1];
}

function calcNumCharsInCode (str) {
  var escapedStr = escape(str);
  var memStrLength = escapedStr.length + 2;
  var specialChars = escapedStr.match(/%\w\w/g);
  if (specialChars) {
    var numQuotes = specialChars.filter(char => char === '%22').length;
    var numSlashes = specialChars.filter(char => char === '%5C').length;
    var numASCIIChars = specialChars.filter(char => ((char !== '%22') && (char !== '%5C'))).length;
    memStrLength = (memStrLength - numSlashes - numQuotes + numASCIIChars);
  }
  globalCounter.inCode.push(memStrLength);
  return globalCounter.inCode[globalCounter.inCode.length - 1];
}

function calcTotalInMemory () {
  return globalCounter.inMemory.reduce((acc, val) => acc + val);
}

function calcTotalInCode () {
  return globalCounter.inCode.reduce((acc, val) => acc + val);
}

function calcDiffInChars () {
  var totalInCode = calcTotalInCode();
  var totalInMemory = calcTotalInMemory();
  return totalInCode - totalInMemory;
}

function calcCharCountsFromInput (input) {
  input = input.split('\n');
  input = input.map(str => str.substr(1, str.length-2));
  input = input.map(str => {
    return [str, calcNumCharsInCode(str), calcNumCharsInMemory(str)];
  });
  return input;
}

module.exports = {
  globalCounter: globalCounter,
  trackGlobalStringCounts: trackGlobalStringCounts,
  calcNumCharsInCode: calcNumCharsInCode,
  calcNumCharsInMemory: calcNumCharsInMemory,
  calcTotalInMemory: calcTotalInMemory,
  calcTotalInCode: calcTotalInCode,
  calcDiffInChars: calcDiffInChars,
  calcCharCountsFromInput: calcCharCountsFromInput
};