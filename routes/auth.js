const express = require('express')
const router = express.Router()

//@route      GET api/auth
//@desc       Get a logged in user
//@access     Private route 
router.get('/', (req,res) => {
  res.send('Get a logged user')
})

//@route      POST api/auth
//@desc       To actually log in user
//@access     Public route 
router.post('/', (req,res) => {
  res.send('Logged in')
})



module.exports = router