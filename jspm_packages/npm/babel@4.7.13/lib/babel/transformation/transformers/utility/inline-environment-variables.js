/* */ 
"format amd";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

exports.MemberExpression = MemberExpression;

var t = _interopRequireWildcard(require("../../../types"));

var optional = exports.optional = true;

var match = t.buildMatchMemberExpression("process.env");

function MemberExpression(node) {
  if (match(node.object)) {
    var key = t.toComputedKey(node, node.property);
    if (t.isLiteral(key)) {
      return t.valueToNode(process.env[key.value]);
    }
  }
}

exports.__esModule = true;