const express = require('express')
const getProduct = require('./getProduct')
const getProducts = require('./getProducts')
const app = express()
const port = 3001


app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)





app.listen(port, () => console.log(`Listening on port: ${port}`))