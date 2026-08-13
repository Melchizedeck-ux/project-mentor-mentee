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

// Mount API routes matching the UI endpoints
app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/sessions', sessionRoutes);

module.exports = app;