const express = require('express')
const morgan = require('morgan')
const app = express()
app.listen(3000)
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.get('/', (req, res) => {
    // res.send('<h1>Main Menu</h1>')
    res.render('index', { title: 'Main Menu' })
})


app.get('/about', (req, res) => {
    // res.send('<h1>About</h1>')
    res.render('about', { title: 'About' })
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' })
})