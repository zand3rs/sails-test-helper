#!/usr/bin/env node

var package = require("../package.json");
var path = require("path");
var fs = require("fs-extra");

var program = require("commander");
var prompt = require("prompt");
var args = process.argv.slice(2);

program
  .version(package.version, "-v, --version");

program
  .command("init")
  .description("Initialize test environment.")
  .action(init);

program.parse(process.argv);
!args.length && program.help();

function init() {
  prompt.colors = false;
  prompt.message = "";
  prompt.delimiter = "";
  prompt.start();

  var skelPath = path.join("..", "skel");
  var files = fs.readdirSync(skelPath);
  console.log("This will overwrite the ff. files and directories:", files);
  prompt.confirm("Do you want to continue?", function(err, ans) {
    if (ans) {
      fs.copySync(skelPath, ".");
      console.log("Done.");
    } else {
      console.log("Cancelled.");
    }
  });
}
