/**
 * @fileoverview Dollar Shave Club's official JavaScript Style Rules.
 *  Linting code to shave the world!
 * @author Arjan Singh <arjan.singh@dollarshaveclub.com>
 * @copyright 2016 Arjan Singh <arjan.singh@dollarshaveclub.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict';

module.exports = {
  rules: {
    'spread-mixins': require('./lib/rules/spread-mixins'),
    'no-underscore-dangle': [2, { allow: ['_super'] }],
  },
  configs: {
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
    },
    ember: {
      rules: {
        'dollarshaveclub/spread-mixins': 2,
      },
    },
  },
};
