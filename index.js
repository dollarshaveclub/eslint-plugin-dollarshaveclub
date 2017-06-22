/**
 * @fileoverview Dollar Shave Club's official JavaScript Style Rules.
 *  Linting code to shave the world!
 * @author Arjan Singh <arjan.singh@dollarshaveclub.com>
 * @copyright 2016 Arjan Singh <arjan.singh@dollarshaveclub.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

module.exports = {
  rules: {
    'spread-mixins': require('./lib/rules/spread-mixins'),
    // because Ember's module system sucks
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,

    // stupid rules
    'no-plusplus': 0,

    // TODO: fix and remove
    'no-restricted-syntax': 0
  },
  configs: {
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true
      }
    },
    ember: {
      rules: {
        'dollarshaveclub/spread-mixins': 2,
        'no-underscore-dangle': [2, { allow: ['_super'] }],
        'consistent-return': 0
      }
    }
  }
}
