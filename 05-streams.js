const fs = require('fs')

let readStream = fs.createReadStream('./docs/test.txt')
// readStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })

let writeStream = fs.createWriteStream('./docs/test4.txt')

writeStream.write('sa')
readStream.pipe(writeStream)