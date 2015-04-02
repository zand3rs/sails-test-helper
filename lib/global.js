//==============================================================================
//-- global properties

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
