const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err)
        return
    }
    const modifyFileData = data.toUpperCase()
    fs.writeFile('output.txt', modifyFileData, (err) => {
        if (err) {
            console.error('Error writing file:', err)
            return
        }
        console.log('File written successfully with modified content.')
        fs.readFile('output.txt', 'utf8', (err, newData) => {
            if (err) {
                console.error('Error reading output file:', err)
                return
            }
            console.log('New file content:', newData)
        })
    })
}) 