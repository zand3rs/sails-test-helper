var nodepath = require("path");
var sinon = require("sinon");
var chai = require("chai");

//==============================================================================
//-- global properties

Object.defineProperty(global, "TEST_ROOT_PATH", {
  get: function() {
    return nodepath.join(process.cwd(), "test");
  }
});

//------------------------------------------------------------------------------

Object.defineProperty(global, "TEST_HELPERS_PATH", {
  get: function() {
    return nodepath.join(TEST_ROOT_PATH, "helpers");
  }
});

//------------------------------------------------------------------------------

Object.defineProperty(global, "TEST_FACTORIES_PATH", {
  get: function() {
    return nodepath.join(TEST_ROOT_PATH, "factories");
  }
});

//------------------------------------------------------------------------------

Object.defineProperty(global, "TEST_FIXTURES_PATH", {
  get: function() {
    return nodepath.join(TEST_ROOT_PATH, "fixtures");
  }
});

//------------------------------------------------------------------------------

Object.defineProperty(global, "TEST_NAME", {
  get: function() {
    var name = "Anonymous";
    var caller = arguments.callee.caller.toString();
    var args = arguments.callee.caller.arguments;
    var match = caller.match(/exports, *require, *module, *__filename, *__dirname/);

    if (match) {
      var filename = args[3] || name;
      name = filename.replace(TEST_ROOT_PATH, "")
                .replace(/^.?unit(\\|\/)?/, "")
                .replace(/(.test).js$/, "");
    }
    return name;
  }
});

//------------------------------------------------------------------------------

var xhr = null;
Object.defineProperty(global, "xhr", {
  get: function() {
    if (!xhr) {
      var app = (sails.express) ? sails.express.app : sails.hooks.http.app;
      xhr = require("supertest")(app);
    }
    return xhr;
  }
});

//------------------------------------------------------------------------------

var request = null;
Object.defineProperty(global, "request", {
  get: function() {
    if (!request) {
      var app = (sails.express) ? sails.express.app : sails.hooks.http.app;
      request = new (require("supertest-session")({app: app}))();
    }
    return request;
  }
});

//------------------------------------------------------------------------------

var factory = require("sails-factory");
Object.defineProperty(global, "factory", {
  get: function() {
    return factory;
  }
});

//==============================================================================

Object.defineProperty(global, "sinon", {
  get: function() { return sinon; }
});

Object.defineProperty(global, "chai", {
  get: function() { return chai; }
});

Object.defineProperty(global, "stub", {
  get: function() { return sinon.stub; }
});

Object.defineProperty(global, "mock", {
  get: function() { return sinon.mock; }
});

Object.defineProperty(global, "expect", {
  get: function() { return chai.expect; }
});

Object.defineProperty(global, "requireHelper", {
  get: function() { return requireHelper; }
});

//==============================================================================
//-- locals

function requireHelper(module) {
  var _module = nodepath.join(TEST_HELPERS_PATH, module);
  return require(_module);
}

//==============================================================================
//-- initializers...

chai.use(require("sinon-chai"));
chai.should();

//==============================================================================
