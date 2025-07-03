// let os = require('os')
// console.log(os.platform(),os.homedir());

let fs = require('fs')
// fs.readFile('./docs/test.txt',(err,data)=>{
//     if(err) throw new Error(err)
//     console.log(data.toString());
// })

// fs.writeFile('./docs/test2.txt','Test 2 file created',(err)=>{
//     if(err) throw err
//     console.log('wrote');

// })


if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) throw err
        console.log('directory created');

    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) throw err
        console.log('directory deleted');
    })
}

fs.unlink('./docs/test2.txt', (err) => {
    if (err) throw err
    console.log('file deleted');

})