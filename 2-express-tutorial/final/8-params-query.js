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
app.get('/api/products/:id', (incomingRequest, outgoingResponse) => {

    const {id} = incomingRequest.params;
    const singleProduct = products.find((product) => product.id === Number(id))

    if (!singleProduct){
        return outgoingResponse.status(404).send("Product not found")
    }
    return outgoingResponse.json(singleProduct)
})
app.get('/api/v1/query', (incomingRequest, outgoingResponse) => {
    console.log(incomingRequest.query)

    const {search, limit} = incomingRequest.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        return sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        return outgoingResponse.status(200).send('No product matches your search')
    }

    return outgoingResponse.status(200).json(sortedProducts)
    // outgoingResponse.send('Hello World')
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})