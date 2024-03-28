const express = require('express')()

express.get('/', (incomingReqest, outgoingResponse) => {
    outgoingResponse.status(200).send('Home Page')
})

express.get('/about', (incomingReqest, outgoingResponse) => {
    outgoingResponse.status(200).send("About Page")
})

express.all('*', (incomingReqest, outgoingResponse) => {
    outgoingResponse.status(404).send('<h1>Resorce not found</h1>')
})

express.listen(5000, () =>{
    console.log('Server is listening on port 5000...')
})