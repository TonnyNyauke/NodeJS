const http = require('http')

http.createServer((incomingRequest, outgoingResponse) =>{
    console.log('User hit the server')
    //console.log(incomingRequest.url)
    if (incomingRequest.url === '/'){
        outgoingResponse.writeHead(200, {'content-type':'text/html'})
        outgoingResponse.write('<h1>Home Page</h1>')
        outgoingResponse.end()
    }
    else if (incomingRequest.url === '/about'){
        outgoingResponse.writeHead(200, {'content-type':'text/html'})
        outgoingResponse.write('<h1>About Page</h1>')
        outgoingResponse.end()
    }
    else{
        outgoingResponse.writeHead(404, {'content-type':'text/html'})
        outgoingResponse.write('<h1>Ooops! Page not found</h1>')
        outgoingResponse.end()
    }
}).listen(5000)