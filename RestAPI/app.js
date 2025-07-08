const express = require('express')
const app = express()
const port = 3000

//middleware 
app.use(express.json())

let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
]

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Book API',
    })
})

app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/books/:id', (req, res) => {
    const book = books.find(item => item.id === parseInt(req.params.id))
    if (book) res.status(200).json(book)
    else res.status(404).json({ message: 'Book not found' })
})

app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    books.push(newBook)
    res.status(201).json(newBook)
})

app.put('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(item => item.id === parseInt(req.params.id))
    if (bookIndex !== -1) {
        books[bookIndex] = {
            id: parseInt(req.params.id),
            title: req.body.title || books[bookIndex].title,
            author: req.body.author || books[bookIndex].author
        }
        res.status(200).json(books[bookIndex])
    } else {
        res.status(404).json({ message: 'Book not found' })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})