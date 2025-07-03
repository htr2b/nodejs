const http = require('http')
const fs = require('fs')
const _ = require('lodash')
const server = http.createServer((req, res) => {
    console.log('requested ', req.url, req.method);

    res.setHeader('Content-Type', 'text/html')
    // res.write('<head><title>first come first serve</title></head>')
    // res.write('<h1>Hello</h1>')
    // res.end()
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            break
        case '/about':
            path += 'about.html'
            break
        case '/about-us':
            res.statusCode = 301
            res.setHeader('Location', '/about')
        default:
            path += '404.html'
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
    console.log(res.statusCode);

})

server.listen(3000, 'localhost', () => {
    console.log('listening port 3000');
})


// let nums = [12, 32, 414, 152, 123, 5123, 5123, 12, 1234]
// _.each(nums, (val) => {
//     console.log(val);

// })


// let num = _.random(0, 20)
// console.log(num);

// let greeting = _.once(() => {
//     console.log('hello');

// })
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()

