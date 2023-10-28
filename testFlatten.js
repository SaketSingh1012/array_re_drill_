const flatten = require('../flatten');
const nestedArray = [1, [2], [[3]], [[[4]]]];

const output = flatten(nestedArray);
console.log(output);
