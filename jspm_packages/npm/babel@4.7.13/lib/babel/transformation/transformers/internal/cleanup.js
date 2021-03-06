/* */ 
"format amd";
"use strict";

var SequenceExpression = exports.SequenceExpression = {
  exit: function exit(node) {
    if (node.expressions.length === 1) {
      return node.expressions[0];
    } else if (!node.expressions.length) {
      this.remove();
    }
  }
};

var ExpressionStatement = exports.ExpressionStatement = {
  exit: function exit(node) {
    if (!node.expression) this.remove();
  }
};

var Binary = exports.Binary = {
  exit: function exit(node) {
    var right = node.right;
    var left = node.left;

    if (!left && !right) {
      this.remove();
    } else if (!left) {
      return right;
    } else if (!right) {
      return left;
    }
  }
};
exports.__esModule = true;