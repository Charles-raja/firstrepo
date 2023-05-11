const path = require('path')
 console.log(path.sep) //seperator method

 const textfile = 'index.text'
 const textFilePath = path.join('/content/','subfolder', textfile)//join two or more part of the path
 console.log(textFilePath)

 const base1 = path.dirname(textFilePath)
 console.log(base1)
 const base2 = path.basename(textFilePath)
 console.log(base2)
 const base3 = path.extname(textFilePath)
 console.log(base3)
 const base4 = path.basename(textFilePath, path.extname(textFilePath))
 console.log(base4)
 const base5 = path.resolve('index.text')//to get absolute path
 console.log(base5)

 console.log(path.normalize('/content/subfolder/..//index.text'))