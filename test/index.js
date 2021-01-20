const less2json = require("../src/index");
const path = require("path");

// absolute path
const lessfile = path.resolve(__dirname, "./variables.less");

const json = less2json(lessfile);
console.log(json);
