"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspector = void 0;
/**
 * Inspector to display objects
 * @param desc
 * @param obj
 * @param depth
 */
const inspector = function (desc, obj, depth = 6) {
    const { inspect } = require('node:util');
    console.log('\n', desc.cyan);
    console.log(inspect(obj, { depth, colors: true }));
};
exports.inspector = inspector;
