var http = require('http')
var fs = require('fs')

http.createServer(function (incomingRequest, outgoingResponse){
    // const text = fs.readFileSync('./Content/big.txt', 'utf8');
    // outgoingResponse.end(text)
    const fileStream = fs.createReadStream('./Content/big.txt', 'utf8');
    fileStream.on('open', () =>{
        fileStream.pipe(outgoingResponse);
    })
    fileStream.on('error', (error) => {
        outgoingResponse.end(error);
    })
}).listen(5000)