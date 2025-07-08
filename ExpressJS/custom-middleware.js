const express = require('express')
const app = express()
const port = 3000

const requestTimeStampLogger = (req, res, next) => {
    const currentTime = new Date().toISOString()
    console.log(`${currentTime} from ${req.method} request to ${req.url}`)
    next()
}

app.use(requestTimeStampLogger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})