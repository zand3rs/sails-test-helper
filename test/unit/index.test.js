var cwd = process.cwd();
var path = require("path");
var index = require(cwd);
var package = require(path.join(cwd, "package.json"));
var _expect = require("chai").expect;

describe(package.name, function() {

  describe("bootstrap", function() {
    it("should lift sails", function() {
      _expect(sails).to.exist;
    });
    it("should load helper bootstrap if it exists", function() {
      _expect(HELPER_BOOTSTRAP).to.exist;
    });
  });

  describe("global", function() {
    describe("#TEST_ROOT_PATH", function() {
      it("should be defined", function() {
        _expect(TEST_ROOT_PATH).to.exist;
        _expect(TEST_ROOT_PATH).to.equal(global.TEST_ROOT_PATH);
        _expect(TEST_ROOT_PATH).to.equal(path.join(process.cwd(), "test"));
      });
    });
    describe("#TEST_HELPERS_PATH", function() {
      it("should be defined", function() {
        _expect(TEST_HELPERS_PATH).to.exist;
        _expect(TEST_HELPERS_PATH).to.equal(global.TEST_HELPERS_PATH);
        _expect(TEST_HELPERS_PATH).to.equal(path.join(process.cwd(), "test", "helpers"));
      });
    });
    describe("#TEST_FACTORIES_PATH", function() {
      it("should be defined", function() {
        _expect(TEST_FACTORIES_PATH).to.exist;
        _expect(TEST_FACTORIES_PATH).to.equal(global.TEST_FACTORIES_PATH);
        _expect(TEST_FACTORIES_PATH).to.equal(path.join(process.cwd(), "test", "factories"));
      });
    });
    describe("#TEST_FIXTURES_PATH", function() {
      it("should be defined", function() {
        _expect(TEST_FIXTURES_PATH).to.exist;
        _expect(TEST_FIXTURES_PATH).to.equal(global.TEST_FIXTURES_PATH);
        _expect(TEST_FIXTURES_PATH).to.equal(path.join(process.cwd(), "test", "fixtures"));
      });
    });
    describe("#TEST_NAME", function() {
      it("should be defined", function() {
        _expect(TEST_NAME).to.exist;
        _expect(TEST_NAME).to.equal(global.TEST_NAME);
        _expect(TEST_NAME).to.equal("Anonymous");
      });
    });
    describe("#request", function() {
      it("should be defined", function() {
        _expect(request).to.exist;
        _expect(request).to.be.an("object");
        _expect(request).to.equal(global.request);
      });
    });
    describe("#xhr", function() {
      it("should be defined", function() {
        _expect(xhr).to.exist;
        _expect(xhr).to.be.an("object");
        _expect(xhr).to.equal(global.xhr);
      });
    });
    describe("#requireHelper()", function() {
      it("should be defined", function() {
        _expect(requireHelper).to.exist;
        _expect(requireHelper).to.be.a("function");
        _expect(requireHelper).to.equal(global.requireHelper);
      });
    });
    describe("#expect()", function() {
      it("should be defined", function() {
        _expect(expect).to.exist;
        _expect(expect).to.be.a("function");
        _expect(expect).to.equal(global.expect);
      });
    });
    describe("#should", function() {
      it("should be defined", function() {
        _expect("").to.have.property("should");
        _expect(should).to.exist;
        _expect(should).to.be.an("object");
      });
    });
    describe("#sinon", function() {
      it("should be defined", function() {
        _expect(sinon).to.exist;
        _expect(sinon).to.be.an("object");
        _expect(sinon).to.equal(global.sinon);
      });
    });
    describe("#chai", function() {
      it("should be defined", function() {
        _expect(chai).to.exist;
        _expect(chai).to.be.an("object");
        _expect(chai).to.equal(global.chai);
      });
    });
    describe("#stub()", function() {
      it("should be defined", function() {
        _expect(stub).to.exist;
        _expect(stub).to.be.a("function");
        _expect(stub).to.equal(global.stub);
      });
    });
    describe("#mock()", function() {
      it("should be defined", function() {
        _expect(mock).to.exist;
        _expect(mock).to.be.a("function");
        _expect(mock).to.equal(global.mock);
      });
    });
    describe("#factory", function() {
      it("should be defined", function() {
        _expect(factory).to.exist;
        _expect(factory).to.be.a("function");
        _expect(factory).to.equal(global.factory);
      });
    });
  });

});
