const eventEmitter = require('events');

const customEmmitter = new eventEmitter();

customEmmitter.on('Response', (name, age) => {
    console.log(`Data received from ${name}, aged ${26}`)
})

customEmmitter.on('Response', () => {
    console.log(`Some other logic`)
})

customEmmitter.emit('Response', 'Tonny', 26)