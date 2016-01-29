/* inspired by https://github.com/comfycode/gobble-jade/ */

var Jade = require('jade');

function jade(source, options) {
  options.filename = this.src;
  var compiledFunc = Jade.compileClient(source, options);
  return 'export default ' + compiledFunc;
}

jade.defaults = {
  accept: ['.jade'],
  ext: '.js'
};

module.exports = jade;