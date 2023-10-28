const find = require('../find');
const items = [1, 2, 3, 4, 5, 5];

const output = find(items, (i) => i === 3);
console.log(output);
