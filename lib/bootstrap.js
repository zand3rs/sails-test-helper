/*
 * Sails application launcher.
 * Using node-test-helper's beforeAll/afterAll extended functions.
 *
 */

//==============================================================================

var Sails = require("sails");
var rc = require("rc");

beforeAll(function(done) {
  Sails.lift(rc("sails"), function(err, sails) {
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

  Sails.lower(_shutdown);
});
