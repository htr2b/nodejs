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
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
        } else {
            console.log('File content:', data)
        }
    })
}