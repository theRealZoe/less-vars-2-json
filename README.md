# less-vars-2-json
Read variables from less file. Support `import` statement.

Example:

```less
// colors.less
@blue1: #00f;
@blue2: #00e;
@grey1: #eee;
@grey2: #888;
@grey3: #333;

// variables.less
@import "./colors.less";
@highlight-color: @blue1;
@primary-text: @grey3;
@border: 1px solid @grey1;
```
```javascript
const less2json = require("less-vars-2-json");
const path = require("path");
// absolute path
const lessfile = path.resolve(__dirname, "./variables.less");
const json = less2json(lessfile);
```

Output:

```
{
  blue1: '#00f',
  blue2: '#00e',
  grey1: '#eee',
  grey2: '#888',
  grey3: '#333',
  'highlight-color': '#00f',
  'primary-text': '#333',
  border: '1px solid #eee'
}
```

