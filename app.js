const nyauke = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = nyauke.flattenDeep(items)
console.log(newItems); // [1, 2, 3, 4]