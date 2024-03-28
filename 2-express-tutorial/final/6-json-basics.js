const express = require('express')

const app = express()
const {people, products} = require('./data')
app.get('/',(incomingRequest, outgoingResponse) => {
    outgoingResponse.json(products)
    console.log(people)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})