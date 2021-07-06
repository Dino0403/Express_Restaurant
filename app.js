// import package
const express = require('express')
const exphdbs = require('express-handlebars')
const methodOverride = require('method-override')
const hbshelpers = require('handlebars-helpers')
const multihelpers = hbshelpers()
const routes = require('./routes')

// start express
const app = express()
const PORT = process.env.PORT || 3000
// setting mongoDB
require('./config/mongoose')

// setting static
app.use(express.static('public'))
app.use(methodOverride('_method'))

// setting handlebars
app.engine('handlebars', exphdbs({
  defaultLayout: 'main',
  extname: ".handlebars",
}))
app.set('view engine', 'handlebars')

// seetting body-parser
app.use(express.urlencoded({ extended: true }))

// setting router 
app.use(routes)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})