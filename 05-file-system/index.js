const fs = require('fs')
const path = require('path')

const dataFolder = path.join(__dirname, 'data')

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder)
    console.log('Data folder created:', dataFolder);
}

const filePath = path.join(dataFolder, 'example.txt')

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'First Text', 'utf8')
}

// fs.appendFileSync(filePath, '\nSecond Text', 'utf8')
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err)
//     } else {
//         console.log('File content:', data)
//     }
// })

const asyncFilePath = path.join(dataFolder, 'async-example.txt')
fs.writeFile(asyncFilePath, 'Async First Text', 'utf8', (err) => {
    if (err) {
        console.error('Error writing async file:', err)
    } else {
        console.log('Async file created:', asyncFilePath)
    }
})

fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading async file:', err)
    } else {
        console.log('Async file content:', data)
    }
})