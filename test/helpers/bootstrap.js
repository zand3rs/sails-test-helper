var _expect = require("chai").expect;

before(function(done) {
  HELPER_BOOTSTRAP = true;
  _expect(sails).to.exist;
  done();
});
