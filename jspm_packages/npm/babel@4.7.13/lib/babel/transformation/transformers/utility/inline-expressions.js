/* */ 
"format amd";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

exports.Expression = Expression;
exports.Identifier = Identifier;

var t = _interopRequireWildcard(require("../../../types"));

var optional = exports.optional = true;

function Expression(node, parent, scope) {
  var res = t.evaluate(node, scope);
  if (res.confident) return t.valueToNode(res.value);
}

function Identifier() {}

exports.__esModule = true;

// override Expression