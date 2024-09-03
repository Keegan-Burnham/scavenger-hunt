const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 for local development

app.use(cors());
app.use(express.json());

// Import routes
const scoreRoutes = require('./routes/score');

app.use('/riddle', express.static(path.join(__dirname, '../frontend/players/bella')));
app.use('/riddle', express.static(path.join(__dirname, '../frontend/players/emery')));
app.use('/riddle', express.static(path.join(__dirname, '../frontend/players/grady')));
app.use('/riddle', express.static(path.join(__dirname, '../frontend/players/raanan')));

// Serve static files from the `images` directory
app.use('/images/tiltPuzzle', express.static(path.join(__dirname, '../frontend/assets/images/tilt.png')));
app.use('/images/lockPuzzle', express.static(path.join(__dirname, '../frontend/assets/images/lockPuzzle.PNG')));
app.use('/images/bottlecapPuzzle', express.static(path.join(__dirname, '../frontend/assets/images/bottlecapPuzzle.PNG')));
app.use('/images/countryImage', express.static(path.join(__dirname, '../frontend/assets/images/countryImage.PNG')));

// Riddle 1

app.get('/riddle/sparkling-sky-8972', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle1.html'));
});

app.get('/riddle/midnight-moon-xyz123', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle1.html'));
});

app.get('/riddle/hidden-path-92abc', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle1.html'));
});

app.get('/riddle/blue-ocean-9845', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle1.html'));
});


// Riddle 2

app.get('/riddle/enchanted-forest', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle2.html'));
});

app.get('/riddle/time-travel', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle2.html'));
});

app.get('/riddle/mystery-museum', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle2.html'));
});

app.get('/riddle/space-odyssey', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle2.html'));
});



// Use routes
app.use('/api/scores', scoreRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});