# Precompile jade templates into your bundle

## Usage:

```javascript
const gobble = require('gobble');

module.exports = gobble([
  gobble('src/root'),
  gobble([
    gobble('src/js'),
    gobble('src/jade').transform('jade-es6')
  ])
]);
```

And then in your ES6 file:
```javascript
import myTemplate from './myTemplate.jade';
const markup = myTemplate({ attr: 'value' });
```
