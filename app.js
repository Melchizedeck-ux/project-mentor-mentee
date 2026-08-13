const express = require('express');
const cors = require('cors');

const userRoutes = require('./src/routes/userRoutes');
const requestRoutes = require('./src/routes/requestRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Core Health Endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'online', system: 'Mentor-Mentee API Core Engine' });
});

// Feature Routes
app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/sessions', sessionRoutes);

module.exports = app;