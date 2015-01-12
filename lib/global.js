var path = require("path");

//==============================================================================
//-- global properties

Object.defineProperty(global, "TEST_ROOT_PATH", {
  get: function() {
    return path.join(process.cwd(), "test");
  }
});

//------------------------------------------------------------------------------

Object.defineProperty(global, "TEST_HELPERS_PATH", {
  get: function() {
    return path.join(TEST_ROOT_PATH, "helpers");
  }
});

//------------------------------------------------------------------------------

Object.defineProperty(global, "TEST_FIXTURES_PATH", {
  get: function() {
    return path.join(TEST_ROOT_PATH, "fixtures");
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

//==============================================================================

global.requireHelper = function(module) {
  var _module = path.join(TEST_HELPERS_PATH, module);
  return require(_module);
}

//==============================================================================

global.sinon = require("sinon");
global.stub = sinon.stub;
global.mock = sinon.mock;

global.chai = require("chai");
global.expect = chai.expect;
chai.should();
chai.use(require("sinon-chai"));

