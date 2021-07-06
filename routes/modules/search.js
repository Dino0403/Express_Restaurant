const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const reg = new RegExp(keyword, 'i')
  let errorMsg = ''
  Restaurant.find({ $or: [{ name: { $regex: reg } }, { category: { $regex: reg } }] })
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => {
      if (restaurants.length === 0) {
        errorMsg = '找不到相關的的餐廳，請重新輸入關鍵字或餐廳類型!'
      }
      res.render('index', { restaurants: restaurants, keyword: keyword, errorMsg: errorMsg })
    })
})


module.exports = router
