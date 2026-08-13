const express = require('express');
const cors = require('cors');

const userRoutes = require('./src/routes/userRoutes');
const requestRoutes = require('./src/routes/requestRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend files from public directory
app.use(express.static('public'));
<<<<<<< HEAD
// Core Health Endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'online', system: 'Mentor-Mentee API Core Engine' });
});

// Feature Routes
=======

// Mount API routes matching the UI endpoints
>>>>>>> e53b53e398d643059615594e6deab235e0df6aca
app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/sessions', sessionRoutes);

module.exports = app;
