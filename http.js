const http = require('http')
// const { Http2ServerRequest } = require('http2')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
       res.end('This is our homepage')
    }else if(req.url === '/about'){
        res.end('This is our aboutpaage')
    }else{
        res.end('<h1>error</h1> <h2>we cant semm to find the page you are looking for</h2> <a href=/>back home</a>')
    }

})

server.listen(5000)