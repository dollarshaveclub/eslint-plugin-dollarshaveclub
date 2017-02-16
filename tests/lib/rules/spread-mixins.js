/**
 * @fileoverview Use the ES6 spread operator to add Ember Mixins.
 * @author Arjan Singh <arjan.singh@dollarshaveclub.com>
 * @copyright 2016 Arjan Singh <arjan.singh@dollarshaveclub.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
/* eslint-disable import/no-extraneous-dependencies */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/spread-mixins');
const RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const PARSER_OPTIONS = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
  },
};

ruleTester.run('spread-mixins', rule, {

  valid: [
    {
      code: 'export default 1;',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default function foo() {};',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Ember.Component;',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Ember.Component.extend();',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Ember.Component.extend(foo);',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Ember.Component.extend({});',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Ember.Component.extend(...mixins, {});',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Component.create(...mixin, {});',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Ember.Component.extend(...someOtherVariableName, {});',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Component.someOtherFn({});',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Component.fooFn(barOne, barTwo, {});',
      parserOptions: PARSER_OPTIONS,
    },
    {
      code: 'export default Component.fooFn(barOne, barTwo);',
      parserOptions: PARSER_OPTIONS,
    },
  ],

  invalid: [
    {
      code: 'export default Ember.Component.extend(MixinOne, {});',
      parserOptions: PARSER_OPTIONS,
      errors: [{
        message: 'Extending a module with mixins. Please use a spread (...) operator',
        type: 'ExportDefaultDeclaration',
      }],
    },
    {
      code: 'export default Ember.Component.extend(MixinOne, MixinTwo, {});',
      parserOptions: PARSER_OPTIONS,
      errors: [{
        message: 'Extending a module with mixins. Please use a spread (...) operator',
        type: 'ExportDefaultDeclaration',
      }],
    },
    {
      code: 'export default Component.extend(MixinOne, MixinTwo, MixinThree, {});',
      parserOptions: PARSER_OPTIONS,
      errors: [{
        message: 'Extending a module with mixins. Please use a spread (...) operator',
        type: 'ExportDefaultDeclaration',
      }],
    },
    {
      code: 'export default Component.extend(MixinOne, MixinTwo, {});',
      parserOptions: PARSER_OPTIONS,
      errors: [{
        message: 'Extending a module with mixins. Please use a spread (...) operator',
        type: 'ExportDefaultDeclaration',
      }],
    },
    {
      code: 'export default Module.create(MixinOne, MixinTwo, {});',
      parserOptions: PARSER_OPTIONS,
      errors: [{
        message: 'Creating a module with mixins. Please use a spread (...) operator',
        type: 'ExportDefaultDeclaration',
      }],
    },
  ],
});
