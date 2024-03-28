const express = require('express')

const app = express()

//Middleware
const logger = require('./logger')
app.use(logger)

app.get('/', (incomingReqest, outgoingResponse) => {
    
    outgoingResponse.send('Home')
})
app.get('/About', (incomingReqest, outgoingResponse) => {
    outgoingResponse.send('About')
})
app.get('/api/products', (incomingReqest, outgoingResponse) => {
    outgoingResponse.send('Products')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})