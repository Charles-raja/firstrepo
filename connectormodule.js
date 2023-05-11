/*const sayHi = require('./module1.js')
const names = require('./module2.js')

 sayHi(names.sam)
 sayHi(names.raja)

// const a = require('./module4.js')  it is awrong way
// console.log(a)

require('./module4.js')  */

const data= require('./module3.js') 
const items = data.items[0]
console.log(items)
const item = data.persons.person1
console.log(item)

