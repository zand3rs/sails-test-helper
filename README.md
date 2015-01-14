# sails-test-helper

Test helper suite for Sails.js using [Mocha](https://github.com/mochajs/mocha) test framework.

## Dependencies

* [Mocha](https://github.com/mochajs/mocha)
* [Chai](https://github.com/chaijs/chai)
* [Sinon](https://github.com/cjohansen/Sinon.JS)
* [Sinon-Chai](https://github.com/domenic/sinon-chai)
* [Supertest](https://github.com/visionmedia/supertest)
* [Supertest-Session](https://github.com/rjz/supertest-session)


## Installation

```sh
# Local install
$ npm install sails-test-helper

# Global install
$ sudo npm install -g sails-test-helper
```

## Initialization

Copy test suite template to current directory.

```sh
# Local install
$ node_modules/.bin/sails-test-helper init

# Global install
$ sails-test-helper init
```

The following will be copied to the current working directory:

```
Makefile
test/
  factories/
  fixtures/
  helpers/
  unit/
```

## Writing Tests

### Controllers


```javascript
//-- test/unit/controllers/SampleController.test.js
require("sails-test-helper");

describe(TEST_NAME, function() {
  describe("GET index", function() {
    it("should be successful", function() {
      request.get("/sample").expect(200);
    });
  });
});
```


*Execute SampleController test*

```
$ make test

  controllers/SampleController
    GET index
      ✓ should be successful (82ms)

  1 passing (1s)
```


### Models

```javascript
//-- test/unit/models/Sample.test.js
require("sails-test-helper");

describe(TEST_NAME, function() {
  describe(".create()", function() {
    it("should be successful", function(done) {
      Sample.create().exec(function(err, record) {
        expect(err).to.not.exist;
        expect(record).to.exist;
        done();
      });
    });
  });
});
```


*Execute Sample test*

```
$ make test

  models/Sample
    .create()
      ✓ should be successful 

  1 passing (1s)
```

## Helpers

* TEST_NAME
* TEST_ROOT_PATH
* TEST_HELPERS_PATH
* TEST_FACTORIES_PATH
* TEST_FIXTURES_PATH
* requireHelper()
* stub()
* mock()
* expect()
* should
* sinon
* chai
* request
* xhr
