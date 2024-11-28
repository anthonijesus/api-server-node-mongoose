const taskSchema = require('../models/tasks');
const mongoose = require('mongoose');

const createTaskController = async (req, res) => {
    // Validaciones básicas
    if (!req.body.name || !req.body.description || !req.body.creator) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try{
      const data = new taskSchema(req.body);
      const task = await data.save();
      res.status(200).json(task);
    } catch(err) {
      res.status(400).json({message: err.message});
      console.error(err);
    }
  };

  const getAllTaskController = async (req, res) => {
    try{
      const data = await taskSchema.find();
      if (data.length === 0) {
        return res.status(400).json({ message: 'No hay tareas disponibles' });
        }
      res.status(200).json(data);
    }catch(err) {
      res.status(500).json({message: err.message});
      console.error(err);
    }
  };

  const getTaskByIdController = async (req, res) => {
        
      try{
        const data = await taskSchema.findById(req.params._id);
        if (!data) {
            return res.status(404).json({ message: 'No se encontró la tarea' });
        }
        res.status(200).json(data);
      }catch (err){
        res.status(500).json({message: err.message});
      }
    };

const updateTaskController = async (req, res) => {
        try{
        const data = await taskSchema.findByIdAndUpdate(req.params._id, req.body, {new: true})
        if (!data) {
            return res.status(404).json({ message: 'No se encontró la tarea' });
        }
        res.status(201).json(data);
        }catch(err) {
        res.status(500).json({message: err.message});
        console.error(err);
        }
    };

const deleteTaskController = async (req, res) => {
        try{
        const data = await taskSchema.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).json({ message: 'No se encontró la tarea' });
        }
        res.status(201).json({message: `Tarea con ID ${data._id} eliminada con exito`});
        }catch(err){
        res.status(400).json({message: err.message});
        console.error(err);
        }
    };

    

  module.exports = { createTaskController, getAllTaskController, getTaskByIdController, updateTaskController, deleteTaskController };

 