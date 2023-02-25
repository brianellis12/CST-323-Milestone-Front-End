// Import express and path modules
const express = require('express');
const path = require('path');

// Set port to 8000
const port = 8000;

// Create express app
const app = express();

// Serve static files from the React
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// Send index.html on all requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server on port 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});