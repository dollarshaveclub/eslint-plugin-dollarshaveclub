/**
 * @fileoverview Dollar Shave Club's official JavaScript Style Rules.
 *  Linting code to shave the world!
 * @author Arjan Singh <arjan.singh@dollarshaveclub.com>
 * @copyright 2016 Arjan Singh <arjan.singh@dollarshaveclub.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(`${__dirname}/rules`);

