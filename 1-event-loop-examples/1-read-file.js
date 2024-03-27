const {readFile} = require('fs');

console.log('Started the first task');

//Check File path
readFile('./Content/first.txt', 'utf8', (error, result) => {
    if (error){
        console.log(error);
        return;
    }
    console.log(result);
    console.log('Completed first task');
});

console.log('Starting next task');