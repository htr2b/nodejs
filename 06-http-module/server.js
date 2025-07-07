const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req, 'req');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
})
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});