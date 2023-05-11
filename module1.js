// const sam = "sam"
// const raja = "raja"
// const name ="RCRaja"

const sayHi= (name)=>{  //it is a callback func
  console.log('Hi,my name is ',name)
}

// sayHi('rcr')

module.exports = sayHi  //exports the function sayHi,now we can access it anywhere in this project {in connectormodule.js we access it}