const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/new', (req, res) => {
  const { name, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.create({
    name: name,
    category: category,
    image: image,
    location: location,
    phone: phone,
    google_map: google_map,
    rating: Number(rating),
    description: description
  }).then(() => {
    res.redirect('/')
  })
})

module.exports = router