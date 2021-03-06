/* */ 
"format amd";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

exports.ExpressionStatement = ExpressionStatement;

var t = _interopRequireWildcard(require("../../../types"));

var optional = exports.optional = true;

function ExpressionStatement(node) {
  if (this.get("expression").isIdentifier({ name: "debugger" })) {
    this.remove();
  }
}

exports.__esModule = true;