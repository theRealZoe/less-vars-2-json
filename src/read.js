const path = require("path");
const fs = require("fs");
const importReg = /@import\s+["']([\.\/\w-]+)["']/g;
const commentReg = /\/\/[\s\S]*?(\n|$)/g;
const commentsReg = /\/\*[\s\S]*?\*\//g;

function getContent(file) {
  // read file content and remove comments
  let content = fs.readFileSync(file, "utf8");
  content = removeComments(content);

  // repalce import statement with file content
  let dir = path.dirname(file);
  for(let imp of content.matchAll(importReg)){
    let impfile = path.resolve(dir, imp[1]);
    let imp_content = getContent(impfile);
    content = content.replace(imp[0], imp_content)
  }

  return content;
}

function removeComments(content) {
  return content.replace(commentReg, "").replace(commentsReg, "");
}

module.exports = getContent