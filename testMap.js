const map = require('../map');
const items = [1, 2, 3, 4, 5, 5];

const output = map(items, (i) => i * 2);
console.log(output);
