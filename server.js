const express = require('express');
const cors = require('cors');

const app = require('./app'); // Import the configured app from app.js

const PORT = process.env.PORT || 5000;
// Middleware to process incoming JSON requests
app.use(cors());
app.use(express.json());
// Serve static files from the public folder
app.use(express.static('public'));

// // Test route to verify the API works
// app.get('/', (req, res) => {
//     res.send('Mentor-Mentee API is officially running!');
// });

// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});