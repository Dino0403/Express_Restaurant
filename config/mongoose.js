const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/restaurant'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('err', () => {
  console.log('err')
})
db.once('open', () => {
  console.log('connected')
})

module.exports = db