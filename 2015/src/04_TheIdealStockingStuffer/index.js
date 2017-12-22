const md5 = require('md5');

function getLowestMatchingHashWithFiveLeadingZeros (input) {
  var regex = /^00000\w{27}$/;
  for (let i = 0; i < 100000000; i++) {
    var hash = md5(input + i);
    if (regex.test(hash)) {
      return i;
    }
  }
}

function getLowestMatchingHashWithSixLeadingZeros (input) {
  var regex = /^000000\w{26}$/;
  for (let i = 0; i < 100000000; i++) {
    var hash = md5(input + i);
    if (regex.test(hash)) {
      return i;
    }
  }
}

module.exports = {
  md5: md5,
  getLowestMatchingHashWithFiveLeadingZeros: getLowestMatchingHashWithFiveLeadingZeros,
  getLowestMatchingHashWithSixLeadingZeros: getLowestMatchingHashWithSixLeadingZeros
};
