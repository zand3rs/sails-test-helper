/*
 * Sails application launcher.
 * Using node-test-helper's beforeAll/afterAll extended functions.
 *
 */

//==============================================================================
var fs = require('fs');
var sailsrc ={
  log: {
    level: "silent"
  }
};

var file_path = __dirname.replace(/node_modules\/sails-test-helper\/lib/ig, '');
file_path = file_path + '.sailsrc';

var extend = fs.readFileSync(file_path);
extend = JSON.parse(extend.toString());

for (key in extend) {
  sailsrc[key] = extend[key];
}

beforeAll(function(done) {
  require("sails").lift(sailsrc, function(err, sails) {
    done && done(err, sails);
  });
});

//------------------------------------------------------------------------------

afterAll(function(done) {
  //-- NOTE: This is a workaround for sails.lower multiple callback calls...
  var _shutting_down = false;
  function _shutdown(err) {
    if (!_shutting_down) {
      _shutting_down = true;
      done && done(err);
    }
  }

  (typeof sails != "undefined") ? sails.lower(_shutdown) : _shutdown();
});
