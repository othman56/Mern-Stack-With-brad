// initalize express and express Router
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {getGoal, setGoal, updateGoal,deleteGoal} = require('../controllers/goalController')

// cleaning up our code by chaining the same routes to one function
router.route('/').get(getGoal).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router