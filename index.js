const acorn = require('acorn');
/*
 * acorn-class-fields
 * acorn-numeric-separator
 * acorn-private-methods
 * acorn-static-class-features
 * acorn-logical-assignment
 */
const acornStage3 = require('acorn-stage3');

// @ts-ignore
acorn.Parser = acornStage3(acorn.Parser);

module.exports = acorn;
