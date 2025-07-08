const express = require('express')
const app = express()
const port = 3000
//root route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!')
})

//get all products
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Smartphone', price: 499.99 },
        { id: 3, name: 'Tablet', price: 299.99 }
    ]
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    const products = [
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Smartphone', price: 499.99 },
        { id: 3, name: 'Tablet', price: 299.99 }
    ]
    const getSingleProduct = products.find(product => product.id === productId)
    res.json(getSingleProduct || { error: 'Product not found' })
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})