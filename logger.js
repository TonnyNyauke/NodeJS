//incomingRequest => middleware => outgoingResponse
const logger = (incomingRequest, outgoingResponse, next) => {
    const method = incomingRequest.method;
    const url = incomingRequest.url;
    const time = new Date().getFullYear();

    console.log(method, url, time);
    next(); 
}

module.exports = logger;