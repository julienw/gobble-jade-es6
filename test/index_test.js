'use strict';

const assert = require('chai').assert;

suite('index.js', function() {
  test('Compile properly', function() {
    const main = require('../index.js');
    var src = `
h1 This is a Jade template
h2 By #{author}
    `;

    let output = main(src);
    const expectedPrefix = 'export default ';
    assert.equal(output.slice(0, expectedPrefix.length), expectedPrefix);
    output = output.slice(expectedPrefix.length);

    const context = {
      jade: require('jade/runtime')
    };
    require('vm').runInNewContext(output, context);
    const html = context.jadeTemplate({ author: 'Georges Brassens' });

    assert.equal(html, '<h1>This is a Jade template</h1><h2>By Georges Brassens</h2>');
  });
});

