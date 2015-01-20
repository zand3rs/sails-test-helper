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


_Execute SampleController test_

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


_Execute Sample test_

```
$ make test

  models/Sample
    .create()
      ✓ should be successful 

  1 passing (1s)
```


## Test Execution

Tests are executed using **_make_** command. Basically the script will look for tests to be executed in **test/unit/** directory.

```sh
# Run all tests
$ make test

# Run tests under a specific directory
# This will run all tests under test/unit/controllers directory
$ make test controllers

# This will run tests under test/unit/controllers and test/unit/models directories
$ make test controllers models

# Run a specific test file
# This will run tests in test/unit/controllers/SampleController.test.js file
$ make test controllers/SampleController.test
```

### Mocha Options

Mocha options can be passed as parameter to **_make_**. By default, **_mocha_** is being executed using the ff. options:

```sh
# recursive with 30 second timeout using spec reporter
$ mocha --recursive -t 30000 -R spec
```

Use **MOCHA_OPTS** commandline variable to pass specific **_mocha_** options to **_make_**.

```sh
# Dot format without colors. Useful for test execution on CI servers such as Jenkins. 
$ make MOCHA_OPTS='-C -R dot' test
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


## Custom Helpers

You can write your own test helpers or node modules and save it under **test/helpers** directory. Use the built-in **requireHelper()** function to load your custom helper.

```javascript
//-- test/unit/services/SampleService.test.js
require("sails-test-helper");

describe(TEST_NAME, function() {
  it("should load my custom helper", function() {
    var my_helper = requireHelper("my_helper");
    expect(my_helper).to.exist;
  });
});
```

If you need to do some initialization prior to all your tests execution, you can put them inside **test/helpers/bootstrap.js** file. This file will be loaded automatically upon test execution.

```javascript
//-- unit/helpers/bootstrap.js
//-- global variables can also be initialized here...

before(function(done) {
  //-- anything to run or initialize before running all tests...
  
  done();
});
```


