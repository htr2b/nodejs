const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Welcome to the Home Page!\n')
    } else if (url === '/projects') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Welcome to the Project Page!\n')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Page Not Found\n')
    }
})


server.listen(3000, () => {
    console.log('Server is running on port 3000')
})