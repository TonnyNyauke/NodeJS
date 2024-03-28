const authorize = (incomingRequest, outgoingResponse, next) => {
    const {user} = incomingRequest.query;

    if (user === 'Nyauke'){
        incomingRequest.user = {name: 'Nyauke', id:3}
        next()
    }
    else{
        outgoingResponse.status(401).send('Unauthorized access')
    }
}

module.exports = authorize