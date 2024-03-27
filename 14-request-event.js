const http = require('http');

//Using Event Emitter API

http.createServer().on('request', (incomingRequest, outgoingResponse) => {
    outgoingResponse.end('Welcome');
}).listen(5000);