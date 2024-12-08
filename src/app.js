const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const tasksRouter = require('./routes/tasks');


const app = express();
app.use(express.json());
app.use(cors()); // Configurar CORS para permitir solicitudes desde el frontend

const port = process.env.PORT || 3001;

// Middlewares
app.use('/api', tasksRouter);



mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB')).catch(error => console.error(error));
    
app.listen(port, () => console.log(`Server running on port ${port}`));