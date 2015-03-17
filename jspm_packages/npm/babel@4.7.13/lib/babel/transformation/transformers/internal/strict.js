/* */ 
"format amd";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

exports.Program = Program;

var t = _interopRequireWildcard(require("../../../types"));

function Program(program, parent, scope, file) {
  if (file.transformers.strict.canRun()) {
    var directive = file.get("existingStrictDirective");

    if (!directive) {
      directive = t.expressionStatement(t.literal("use strict"));
      var first = program.body[0];
      if (first) {
        directive.leadingComments = first.leadingComments;
        first.leadingComments = [];
      }
    }

    program.body.unshift(directive);
  }
}

exports.__esModule = true;