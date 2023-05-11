const _ = require('lodash')  // lowdash and lodash both are not same


const item = [1,[2,3,[4,5]]]

const newitem = _.flattenDeep(item)

console.log(newitem)