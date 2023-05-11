//
const {readFile, writeFile}= require('fs')
console.log('start')

readFile('./content/subfolder/first.text', 'utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
        }
        const first = result
        console.log(first)
        readFile('./content/subfolder/second.txt', 'utf8',(err,result) =>{
            if(err){
                console.log(err)
                return
                }
                const second = result
                console.log(second)
            })
                writeFile('./content/subfolder/result.txt', 'here is the result' ,{flag:'a'},(err,result) =>{
                    if(err){
                        console.log(err)
                        return
                        }
                        // const third = result
                        // console.log(third)
                        console.log('done with the task')
                    })

})
