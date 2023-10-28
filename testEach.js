const each = require('../each');
const items = [1, 2, 3, 4, 5, 5];

each(items, (item, i) => {
  console.log(`Index ${i}: ${item}`);
});
