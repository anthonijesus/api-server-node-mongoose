const express = require('express');
const { createTaskController, getAllTaskController, getTaskByIdController, updateTaskController, deleteTaskController } = require('../controllers/taskController.js');

const router = express.Router();

// create task
router.post('/task', createTaskController); 

// get all tasks
router.get('/task', getAllTaskController);

// get single task
router.get('/task/:_id', getTaskByIdController);

// update task
router.put('/task/:_id', updateTaskController);

// delete task
router.delete('/task/:_id', deleteTaskController);




// // get all tasks
//router.get('/task', );

// // get single task
// router.get('/task/:_id', async (req, res) => {
//   try{
//     const data = await taskSchema.findById(req.params._id);
//     res.status(200).json(data);
//   }catch (err){
//     res.status(500).json({message: err.message});
//   }
// });

// // update task
// router.put('/task/:_id', async (req, res) => {
//   try{
//     const data = await taskSchema.findByIdAndUpdate(req.params._id, req.body, {new: true})
//     res.status(201).json(data);
//   }catch(err) {
//     res.status(500).json({message: err.message});
//     console.error(err);
//   }
// });

// // delete task
// router.delete('/task/:_id', async (req, res) => {
//   try{
//     const data = await taskSchema.findByIdAndDelete(req.params._id)
//     res.status(201).json(data);
//   }catch(err){
//     res.status.apply(400).json({message: err.message});
//   }
// });

module.exports  = router;