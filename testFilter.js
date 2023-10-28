const filter = require('../filter');
const items = [1, 2, 3, 4, 5, 5];

const output_filtered_data = filter(items, (data) => data > 3);
console.log(output_filtered_data);
