import express from 'express'
const app = express() 
const port = 3000 

// middleware 
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Import Route 
import router from './routes/weather.js'

// Use view Engine 
app.set('view engine', 'ejs')

// Middleware route 
app.use('/', router)
app.listen(port, () => {
  console.log(`Server starting at http://localhost:${port}`)
})