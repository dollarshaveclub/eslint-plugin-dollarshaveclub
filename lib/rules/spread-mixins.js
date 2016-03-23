/**
 * @fileoverview Use the ES6 spread operator to add Ember Mixins.
 * @author Arjan Singh <arjan.singh@dollarshaveclub.com>
 * @copyright 2016 Arjan Singh <arjan.singh@dollarshaveclub.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function exports(context) {
  // variables should be defined here

  //--------------------------------------------------------------------------
  // Helpers
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  // Public
  //--------------------------------------------------------------------------

  return {
    ExportDefaultDeclaration(node) {
      const declarationType = node.declaration.type;

      if (declarationType !== 'CallExpression') return;

      const calleeName = node.declaration.callee.property.name;
      const argsLength = node.declaration.arguments.length;

      if (argsLength === 0) return;

      const firstArgType = node.declaration.arguments[0].type;
      const lastArgType = node.declaration.arguments[argsLength - 1].type;

      // Valid States
      if (calleeName !== 'create' && calleeName !== 'extend') return;
      if (lastArgType !== 'ObjectExpression') return;
      if (argsLength < 2) return;
      if (argsLength === 2 && firstArgType === 'SpreadElement') return;

      // Error States
      if (calleeName === 'extend') {
        context.report(node, 'Extending a module with mixins. Please use a spread (...) operator');
      } else { // if (calleeName == 'create')
        context.report(node, 'Creating a module with mixins. Please use a spread (...) operator');
      }
    },
  };
};

module.exports.schema = [];
