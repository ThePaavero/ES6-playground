/* */ 
"format amd";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

exports.BlockStatement = BlockStatement;

var t = _interopRequireWildcard(require("../../../types"));

var visitor = {
  enter: function enter(node, parent, scope, state) {
    if (!this.isReferencedIdentifier()) return;

    var declared = state.letRefs[node.name];
    if (!declared) return;

    // declared node is different in this scope
    if (scope.getBindingIdentifier(node.name) !== declared) return;

    var assert = t.callExpression(state.file.addHelper("temporal-assert-defined"), [node, t.literal(node.name), state.file.addHelper("temporal-undefined")]);

    this.skip();

    if (t.isAssignmentExpression(parent) || t.isUpdateExpression(parent)) {
      if (parent._ignoreBlockScopingTDZ) return;
      this.parentPath.node = t.sequenceExpression([assert, parent]);
    } else {
      return t.logicalExpression("&&", assert, node);
    }
  }
};

var optional = exports.optional = true;

function BlockStatement(node, parent, scope, file) {
  var letRefs = node._letReferences;
  if (!letRefs) return;

  scope.traverse(node, visitor, {
    letRefs: letRefs,
    file: file
  });
}

exports.Program = BlockStatement;
exports.Loop = BlockStatement;
exports.__esModule = true;