const express = require('express')

const app = express()
const {people, products} = require('./data')
app.get('/',(incomingRequest, outgoingResponse) => {
    outgoingResponse.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products', (incomingRequest, outgoingResponse) => {
    const newProducts = products.map((product) => {
        const {id, name, price} = product;
        return {id, name, price}
    })
    outgoingResponse.json(newProducts)
})
app.get('/api/products/1', (incomingRequest, outgoingResponse) => {
    const single = products.find((product) => product.id === 1)
    outgoingResponse.json(single)
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})