const express = require('express')
const app = express()
const port = 3000

//application level settings
app.set('view engine', 'ejs')

//routing
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.post('/api/data', (req, res) => {
    res.json({
        message: 'Data received successfully',
        data: req.body
    })
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})