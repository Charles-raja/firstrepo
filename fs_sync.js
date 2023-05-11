//FILE SYSTEM - synchronous (not use often because it is slower than asynchrous-fs )
console.log('start')

const {readFileSync, writeFileSync} = require('fs')//fs=filesystem

const first = readFileSync('./content/subfolder/first.text', 'utf8')
console.log(first)
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
console.log(second)

writeFileSync(
    './content/subfolder/result.txt',
    'here is the result ',
    {flag:'a'}  //this flag append the text if it is not used then the text wriiten previousy will delete automtically when we run it.
)

console.log('done witth the task')