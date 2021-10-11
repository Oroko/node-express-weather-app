const express = require('express')
const app = express() 
const port = 3000 

// Import Route 
const weatherRoute = require('./routes/weather')

// Use view Engine 


// Middleware route 
app.use('/', weatherRoute)
app.listen(port, () => {
  console.log(`Server starting at http://localhost:${port}`)
})