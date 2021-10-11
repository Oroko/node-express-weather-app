const express = require('express')
const app = express() 
const port = 3000 

// middleware 
app.use(express.static('public'))

// Import Route 
const weatherRoute = require('./routes/weather')

// Use view Engine 
app.set('view engine', 'ejs')

// Middleware route 
app.use('/', weatherRoute)
app.listen(port, () => {
  console.log(`Server starting at http://localhost:${port}`)
})