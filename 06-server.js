const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log('requested ', req.url, req.method);
    res.setHeader('Content-Type', 'text/html')
    // res.write('<head><title>first come first serve</title></head>')
    // res.write('<h1>Hello</h1>')
    // res.end()
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening port 3000');
})

