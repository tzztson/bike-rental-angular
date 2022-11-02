'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
var tslint_1 = require('tslint');
var typescript_1 = require('typescript');
var Rule = /** @class */ (function (_super) {
  __extends(Rule, _super);
  function Rule() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Rule.getErrorMessage = function (identifier) {
    return "Identifier '" + identifier + "' is prohibited. Please use a more descriptive name.";
  };
  Rule.prototype.apply = function (sourceFile) {
    return this.applyWithFunction(sourceFile, walk, parseOptions(this.ruleArguments));
  };
  Rule.metadata = {
    ruleName: 'identifier-blacklist',
    description: 'Bans the specified names from being used as variable identifiers.',
    optionsDescription: 'A list of blacklisted identifiers.',
    options: {
      type: 'array',
      items: {
        allOf: [{ type: 'string' }],
      },
    },
    optionExamples: [true, [true, 'x'], [true, 'item', 'response']],
    type: 'style',
    typescriptOnly: false,
  };
  return Rule;
})(tslint_1.Rules.AbstractRule);
exports.Rule = Rule;
function parseOptions(ruleArguments) {
  return {
    blacklist: ruleArguments || [],
  };
}
function walk(ctx) {
  typescript_1.forEachChild(ctx.sourceFile, function cb(node) {
    if (
      [
        typescript_1.SyntaxKind.BindingElement,
        typescript_1.SyntaxKind.Parameter,
        typescript_1.SyntaxKind.VariableDeclaration,
        typescript_1.SyntaxKind.PropertyAssignment,
      ].includes(node.kind)
    ) {
      var name_1 = node.name;
      if (name_1.kind === typescript_1.SyntaxKind.Identifier && ctx.options.blacklist.includes(name_1.text)) {
        ctx.addFailureAtNode(name_1, Rule.getErrorMessage(name_1.text));
      }
    }
    typescript_1.forEachChild(node, cb);
  });
}
