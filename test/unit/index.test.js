var cwd = process.cwd();
var path = require("path");
var index = require(cwd);
var package = require(path.join(cwd, "package.json"));
var expect = require("chai").expect;

describe(package.name, function() {

  describe("bootstrap", function() {
    it("should lift sails", function() {
      expect(sails).to.exist;
    });
    it("should load helper bootstrap if it exists", function() {
      expect(HELPER_BOOTSTRAP).to.exist;
    });
  });

  describe("global", function() {
    describe("#TEST_ROOT_PATH", function() {
      it("should be defined", function() {
        expect(global).to.have.property("TEST_ROOT_PATH");
        expect(TEST_ROOT_PATH).to.equal(path.join(process.cwd(), "test"));
      });
    });
    describe("#TEST_HELPERS_PATH", function() {
      it("should be defined", function() {
        expect(global).to.have.property("TEST_HELPERS_PATH");
        expect(TEST_HELPERS_PATH).to.equal(path.join(process.cwd(), "test", "helpers"));
      });
    });
    describe("#TEST_FACTORIES_PATH", function() {
      it("should be defined", function() {
        expect(global).to.have.property("TEST_FACTORIES_PATH");
        expect(TEST_FACTORIES_PATH).to.equal(path.join(process.cwd(), "test", "factories"));
      });
    });
    describe("#TEST_FIXTURES_PATH", function() {
      it("should be defined", function() {
        expect(global).to.have.property("TEST_FIXTURES_PATH");
        expect(TEST_FIXTURES_PATH).to.equal(path.join(process.cwd(), "test", "fixtures"));
      });
    });
    describe("#TEST_NAME", function() {
      it("should be defined", function() {
        expect(global).to.have.property("TEST_NAME");
        expect(TEST_NAME).to.equal("Anonymous");
      });
    });
    describe("#request", function() {
      it("should be defined", function() {
        expect(global).to.have.property("request");
      });
    });
    describe("#xhr", function() {
      it("should be defined", function() {
        expect(global).to.have.property("xhr");
      });
    });
    describe("#requireHelper()", function() {
      it("should be defined", function() {
        expect(global).to.respondTo("requireHelper");
      });
    });
    describe("#expect()", function() {
      it("should be defined", function() {
        expect(global).to.respondTo("expect");
      });
    });
    describe("#should", function() {
      it("should be defined", function() {
        expect("").to.have.property("should");
      });
    });
    describe("#sinon", function() {
      it("should be defined", function() {
        expect(global).to.have.property("sinon");
      });
    });
    describe("#chai", function() {
      it("should be defined", function() {
        expect(global).to.have.property("sinon");
      });
    });
    describe("#stub()", function() {
      it("should be defined", function() {
        expect(global).to.respondTo("stub");
      });
    });
    describe("#mock()", function() {
      it("should be defined", function() {
        expect(global).to.respondTo("mock");
      });
    });
  });

});
