// @description of function   get Goals
// @route Get /api/goals
// @access private  
const getGoal = (req,res) => {
    res.status(200).json({ message: 'Get Goals'})
}

// @description of function Set/Create Goals
// @route POST /api/goals
// @access private  
const setGoal = (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('please add a text field')
    }
    res.status(200).json({ message: 'Set Goals'})
}

// @description of function update Goals
// @route Update /api/goals/id
// @access private  
const updateGoal = (req,res) => {
    res.status(200).json({ message: `Updated goal with the id ${req.params.id}`})
}

// @description of function   get Goals
// @route delete /api/goals/id
// @access private  
const deleteGoal = (req,res) => {
    res.status(200).json({ message: `Deleted goal with the id ${req.params.id} `})
}
module.exports = {getGoal, setGoal, updateGoal,deleteGoal}