function getNiceStringCount (input) {
  if (typeof input === 'string') {
    var stringsToCheck = input.split('\n');
    var niceStrings = stringsToCheck
      .filter(str => doesNotContainNaughtyStrings(str))
      .filter(str => containsDoubleLetter(str))
      .filter(str => containsThreeVowels(str))
      .length;
    return niceStrings;
  } else {
    throw new TypeError('The parameter input must be a string.');
  }
}

function getRevisedNiceStringCount (input) {
  if (typeof input === 'string') {
    var stringsToCheck = input.split('\n');
    var niceStrings = stringsToCheck
      .filter(str => containsRepeatedPair(str))
      .filter(str => containsLetterSandwich(str))
      .length;
    return niceStrings;
  } else {
    throw new TypeError('The parameter input must be a string.');
  }
}

function isNiceString (str) {
  if (typeof str === 'string') {
    return containsDoubleLetter(str) && containsThreeVowels(str) && doesNotContainNaughtyStrings(str);
  } else {
    throw new TypeError('The parameter str must be a string.');
  }
}

function containsDoubleLetter (str) {
  var hasDoubleLetter = /([a-z])\1/i;
  return hasDoubleLetter.test(str);
}

function containsThreeVowels (str) {
  var hasThreeVowels = /.*[aeiou].*[aeiou].*[aeiou].*/;
  return hasThreeVowels.test(str);
}

function doesNotContainNaughtyStrings (str) {
  var hasNaughtyStrings = /ab|cd|pq|xy/;
  return !(hasNaughtyStrings.test(str));
}

function containsRepeatedPair (str) {
  var repeatedPair = /(\w\w).*\1/;
  return repeatedPair.test(str);
}

function containsLetterSandwich (str) {
  var isLetterSandwich = /(\w)\w\1/;
  return isLetterSandwich.test(str);
}

module.exports = {
  getNiceStringCount: getNiceStringCount,
  isNiceString: isNiceString,
  containsDoubleLetter: containsDoubleLetter,
  containsThreeVowels: containsThreeVowels,
  doesNotContainNaughtyStrings: doesNotContainNaughtyStrings,
  containsRepeatedPair: containsRepeatedPair,
  containsLetterSandwich: containsLetterSandwich,
  getRevisedNiceStringCount: getRevisedNiceStringCount
};
