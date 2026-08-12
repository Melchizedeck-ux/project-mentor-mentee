const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware to process incoming JSON requests
app.use(cors());
app.use(express.json());

// Test route to verify the API works
app.get('/', (req, res) => {
    res.send('Mentor-Mentee API is officially running!');
});

// Start listening for requests
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});