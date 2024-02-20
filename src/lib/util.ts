/**
 * Inspector to display objects
 * @param desc
 * @param obj
 * @param depth
 */
const inspector = function (desc: string, obj: any, depth: number = 6): void {
  const { inspect } = require('node:util');
  console.log('\n', desc.cyan);
  console.log(inspect(obj, { depth, colors: true }));
};

export {
  inspector
}