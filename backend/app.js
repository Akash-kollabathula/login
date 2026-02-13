const express = require('express');
const cors = require('cors');
const app = express();


const authRoutes = require('./Routes/authRoutes');
const errorMiddleware = require('./Middleware/errorMiddleware');
const morgan = require('morgan');

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
app.use('/api/auth', authRoutes);

app.use(errorMiddleware);

module.exports = app;