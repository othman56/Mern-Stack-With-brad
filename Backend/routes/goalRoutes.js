// initalize express and express Router
const { Router } = require('express')
const express = require('express')
const router = express.Router()

// get goals endpoint
router.get('/', (req,res) => {
    res.status(200).json({ message: 'Get Goals'})
})

// create goals endpoint
router.post('/', (req,res) => {
    res.status(201).json({ message: 'Create Goals'})
})

// update goals endpoint(we need to specify the id of the goal to update)
router.put('/:id', (req,res) => {
    res.status(200).json({ message: `Updated goal with the id ${req.params.id}`})
})

// delete goals endpoint(we need to specify the id of the goal to update)
router.delete('/:id', (req,res) => {
    res.status(200).json({ message: `Deleted goal with the id ${req.params.id} `})
})

module.exports = router