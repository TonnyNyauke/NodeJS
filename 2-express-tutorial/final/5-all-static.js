const express = require('express')

const app = express();
app.use(express.static('../public'))

// const path = require('path')

// express.get('/', (incomigRequest, outgoingResponse) => {
//     outgoingResponse.sendFile(path.resolve(__dirname, './2-express-tutorial/index.html'))
// })

app.all('*', (incomingRequest, outgoingResponse) => {
    outgoingResponse.status(404).send('Resource not found')
})

app.listen(5000, () =>{
    console.log('Server is listening on port 5000...')
})
