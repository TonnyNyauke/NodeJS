const http = require('http');

http.createServer((incomingRequest, outgoingResponse) => {
    outgoingResponse.writeHead(200, {
        'Context-Type':'text/plain'
    })

    if (incomingRequest.url === '/'){
        outgoingResponse.end('Welcome to our home page');
    }
    if (incomingRequest.url == '/about'){
        outgoingResponse.end('Here is our short history');
    }
    outgoingResponse.end(`
    <h1>Oops!<h1>
    <p>We can't seem to find the page that you are looking for<p>
    <a href="/">Back to home</a>
    `)
    
}).listen(5000);