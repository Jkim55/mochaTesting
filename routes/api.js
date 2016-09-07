const express = require('express')
const router = express.Router()

//middleware to do validate the route inputs
router.post('/:math', (req,res,next) => {
  if(!req.body.num1 && !req.body.num2) {
    return res.status(432).json({message:'No data sent.Thus, no calculations returned.'})
  }
  next()
})

//routes for the calculator
router.post('/add', (req,res,next) => {
  res.json({result: req.body.num1 + req.body.num2})
})

router.post('/sub', (req,res,next) => {
  res.json({result: req.body.num1 - req.body.num2})
})
module.exports = router

// used to be from app.js but pulled out
// app.post('/api/add', (req,res,next) => {   // no longer needs /api
//   res.json({result: req.body.num1 + req.body.num2})
// })
