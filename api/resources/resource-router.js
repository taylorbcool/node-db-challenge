const express = require('express')

const Resources = require('./resource-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Resources.find()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error getting resources' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  Resources.findById(id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error getting resource' })
    })
})

router.post('/', (req, res) => {
  const newResource = req.body

  Resources.add(newResource)
    .then(resources => {
      res.status(201).json(resources)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error creating resource' })
    })
})

module.exports = router