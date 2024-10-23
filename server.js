const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root folder (instead of 'public')
app.use(express.static(__dirname));

// Route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
