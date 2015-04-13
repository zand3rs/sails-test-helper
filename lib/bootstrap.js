/*
 * Sails application launcher.
 * Using node-test-helper's beforeAll/afterAll extended functions.
 *
 */

//==============================================================================

beforeAll(function(done) {
  require("sails").lift({
    //-- turn down the log level so we can view the test results
    log: {
      level: "silent"
    }
  }, function(err, sails) {
    done(err, sails);
  });
});

//------------------------------------------------------------------------------

afterAll(function(done) {
  (typeof sails != "undefined") ? sails.lower(done) : done();
});
