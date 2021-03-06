/* inspired by https://github.com/comfycode/gobble-jade/ */

var Jade = require('jade');

function jade(source, options) {
  options = options || {};
  options.filename = this.src;
  options.name = 'jadeTemplate';
  var compiledFunc = Jade.compileClient(source, options);
  return `
  import jade from 'jade/runtime';
  export default ${compiledFunc}`;
  ``
}

jade.defaults = {
  accept: ['.jade'],
  ext: '.jade.js'
};

module.exports = jade;
