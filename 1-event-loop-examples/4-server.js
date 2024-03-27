const http = require('http');

http.createServer((incomingRequest, outgoingResponse) => {
    console.log('Request event');
    outgoingResponse.end('Hello World');
}).listen(5000, () => {
    console.log('Server listening on port 5000...')
});