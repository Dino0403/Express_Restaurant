const mongoose = require('mongoose')
const MOBGODB_URI = process.env.MOBGODB_URI || 'mongodb://localhost/restaurant'

mongoose.connect(MOBGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('err', () => {
  console.log('err')
})
db.once('open', () => {
  console.log('connected')
})

module.exports = db