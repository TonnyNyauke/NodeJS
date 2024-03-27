const {readFile, writeFile} = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try{
        const first = await readFile('./Content/first.txt', 'utf8');
        const second = await readFile('./Content/second.txt', 'utf8');

        await writeFile('./Content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} : ${second}`)
        const third = await readFile('./Content/result-mind-grenade.txt', 'utf8')

        console.log(first, second);
        console.log(third);
    }
    catch (error){
        console.log(error);
    }
}
start();
// const getText = path => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (error, data) => {
//             if(error){
//                 reject(error)
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./Content/first.txt').then(result => console.log(result))
// .catch(error => console.log(error));

