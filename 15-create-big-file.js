const {writeFileSync} = require('fs');

for(let i = 0; i < 100000; i++){
    writeFileSync('./Content/big.txt', `hello world ${i}`, {flag:'a'})
}