var nodepath = require("path");

require(nodepath.join(__dirname, "lib", "global"));
require(nodepath.join(__dirname, "lib", "bootstrap"));

try {
  requireHelper("bootstrap");
} catch (e) {}
