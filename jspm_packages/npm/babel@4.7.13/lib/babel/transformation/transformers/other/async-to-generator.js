/* */ 
"format amd";
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var remapAsyncToGenerator = _interopRequire(require("../../helpers/remap-async-to-generator"));

exports.manipulateOptions = require("./bluebird-coroutines").manipulateOptions;
var optional = exports.optional = true;

exports.Function = function (node, parent, scope, file) {
  if (!node.async || node.generator) return;

  return remapAsyncToGenerator(node, file.addHelper("async-to-generator"), scope);
};
exports.__esModule = true;