/*
 * Sails application launcher.
 *
 */

//==============================================================================

before(function(done) {
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

after(function(done) {
  (typeof sails != "undefined") ? sails.lower(done) : done();
});
