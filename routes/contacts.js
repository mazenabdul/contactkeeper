const express = require('express')
const router = express.Router()

//@route      GET api/contacts
//@desc       Get the user's contacts
//@access     Private route 
router.get('/', (req,res) => {
  res.send('Retrived contacts for user')
})

//@route      POST api/contacts
//@desc       To add a contact
//@access     Private route 
router.post('/', (req,res) => {
  res.send('Add contact')
})


//@route      PUT api/contacts/:id
//@desc       Update a certain contact
//@access     Private route 
router.put('/:id', (req,res) => {
  res.send('Updated contact')
})

//@route      DELETE api/contacts/:id
//@desc       Delete a certain contact
//@access     Private route 
router.delete('/:id', (req,res) => {
  res.send('Deleted contact')
})



module.exports = router