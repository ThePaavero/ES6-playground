/* */ 
"format amd";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.check = check;

var regenerator = _interopRequire(require("regenerator-babel"));

var t = _interopRequireWildcard(require("../../../types"));

function check(node) {
  return t.isFunction(node) && (node.async || node.generator);
}

var Program = exports.Program = {
  enter: function enter(ast) {
    regenerator.transform(ast);
    this.stop();
  }
};
exports.__esModule = true;