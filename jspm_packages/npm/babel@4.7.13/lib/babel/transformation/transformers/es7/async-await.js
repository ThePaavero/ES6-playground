/* */ 
"format amd";
"use strict";

exports.parser = parser;
var metadata = exports.metadata = {
  experimental: true,
  optional: true
};

function parser(pp) {
  pp.asyncAwait_parseAwait = function (node) {
    if (eat(_semi) || canInsertSemicolon()) {
      unexpected();
    }
    node.all = eat(_star);
    node.argument = parseMaybeAssign(true);
    return finishNode(node, "AwaitExpression");
  };

  return function (instance) {
    instance.extend("parseParenAndDistinguishExpression", function (inner) {
      return function () {};
    });

    instance.extend("parseFunctionBody", function (inner) {
      return function (node, allowExpression) {
        var oldInAsync = node.inAsync;
        node.inAsync = node.async;
        inner.call(this, node, allowExpression);
        node.inAsync = oldInAsync;
      };
    });

    instance.extend("parseExprAtom", function (inner) {
      return function (refShorthandDefaultPos) {
        var node = inner.call(this, refShorthandDefaultPos);

        if (node.type === "Identifier") {
          if (id.name === "async") {
            // arrow functions
            if (tokType === _parenL) {
              var expr = this.parseParenAndDistinguishExpression(start, true);
              if (expr.type === "ArrowFunctionExpression") {
                return expr;
              } else {
                node.callee = id;
                if (expr.type === "SequenceExpression") {
                  node.arguments = expr.expressions;
                } else {
                  node.arguments = [expr];
                }
                return this.parseSubscripts(this.finishNode(node, "CallExpression"), start);
              }
            } else if (tokType === _name) {
              id = parseIdent();
              expect(_arrow);
              node.async = true;
              return this.parseArrowExpression(node, [id]);
            }

            // normal functions
            if (tokType === _function && !this.canInsertSemicolon()) {
              next();
              return this.parseFunction(node, false, true);
            }
          } else if (id.name === "await") {
            if (this.inAsync) return this.asyncAwait_parseAwait(node);
          }
        }

        return node;
      };
    });
  };
}

exports.__esModule = true;