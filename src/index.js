const read = require("./read");
const parse = require("./parse");

/**
 * Read variables from less file
 * @param {string} lessfile absolute path
 */
module.exports = function (lessfile) {
  var content = read(lessfile);
  return parse(content);
};
