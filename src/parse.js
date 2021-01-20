const varExpReg = /@([\w-]+)\s*?:([\s\S]+?)(;|$)/g;
const varReg = /@([\w-]+)\b/g;

module.exports = function (content) {
  const json = {};
  for (let match of content.matchAll(varExpReg)) {
    // match[1]: variable name
    // match[2]: variable value
    let value = match[2].trim();
    if (value.includes("@")) {
      // replace variables in value
      json[match[1]] = value.replace(varReg, function (match, p1) {
        return json[p1];
      });
    } else {
      json[match[1]] = value;
    }
  }
  return json;
};
