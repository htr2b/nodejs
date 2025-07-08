const express = require('express')
const app = express()
const port = 3000

const myMiddleware = (req, res, next) => {
    console.log('Middleware executed!')
    next()
}
app.use(myMiddleware)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)

})

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})