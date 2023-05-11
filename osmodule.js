const os = require('os')
//current user info
const userinfo = os.userInfo()
const  uptime = os.uptime() 
const currentos = {
    name:os.type(),
    release:os.release(),
    totalmem:(os.totalmem()+' bytes'),
    freemem:os.freemem()+' bytes'
}

console.log('the system uptime is',uptime,'sec')
console.log(userinfo)
console.log(currentos)
console.log('hostname of this os is :' ,os.hostname())
