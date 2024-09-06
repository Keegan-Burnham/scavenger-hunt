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
app.use('/riddle', express.static(path.join(__dirname, '../frontend/players/PapaBREW')));

// Serve static files from the `images` directory
app.use('/images/tiltPuzzle', express.static(path.join(__dirname, '../frontend/assets/images/tilt.png')));
app.use('/images/lockPuzzle', express.static(path.join(__dirname, '../frontend/assets/images/lockPuzzle.PNG')));
app.use('/images/bottlecapPuzzle', express.static(path.join(__dirname, '../frontend/assets/images/bottlecapPuzzle.PNG')));
app.use('/images/countryImage', express.static(path.join(__dirname, '../frontend/assets/images/countryImage.PNG')));

// ScoreBoard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
})


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

app.get('/riddle/golden-sands-9101', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle1.html'));
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

app.get('/riddle/gray-stone-2829', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle2.html'));
});



// Riddle 3

app.get('/riddle/pink-flower-2021', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle3.html'));
});

app.get('/riddle/orange-flame-2223', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle3.html'));
});

app.get('/riddle/yellow-star-2425', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle3.html'));
});

app.get('/riddle/brown-leaf-3031', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle3.html'));
});

app.get('/riddle/cyan-wave-3233', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle3.html'));
});


// Riddle 4

app.get('/riddle/blue-moon-1345', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle4.html'));
});

app.get('/riddle/silver-dust-2467', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle4.html'));
});

app.get('/riddle/green-mist-9876', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle4.html'));
});

app.get('/riddle/red-sun-1289', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle4.html'));
});

app.get('/riddle/golden-star-3456', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle4.html'));
});


// Riddle 5

app.get('/riddle/purple-shadow-8723', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle5.html'));
});

app.get('/riddle/black-pearl-2345', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle5.html'));
});

app.get('/riddle/white-wind-6789', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle5.html'));
});

app.get('/riddle/brown-leaf-4591', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle5.html'));
});

app.get('/riddle/grey-smoke-1523', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle5.html'));
});



// Riddle 6

app.get('/riddle/yellow-light-3142', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle6.html'));
});

app.get('/riddle/pink-cloud-6754', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle6.html'));
});

app.get('/riddle/amber-wave-9871', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle6.html'));
});

app.get('/riddle/azure-sky-7632', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle6.html'));
});

app.get('/riddle/crimson-heart-1423', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle6.html'));
});



// Riddle 7

app.get('/riddle/emerald-forest-6548', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle7.html'));
});

app.get('/riddle/ruby-rose-9823', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle7.html'));
});

app.get('/riddle/cyan-ocean-4598', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle7.html'));
});

app.get('/riddle/indigo-night-3124', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle7.html'));
});

app.get('/riddle/bronze-shield-7852', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle7.html'));
});


// Riddle 8

app.get('/riddle/teal-feather-4215', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle8.html'));
});

app.get('/riddle/lavender-bliss-9874', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle8.html'));
});

app.get('/riddle/turquoise-dream-6741', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle8.html'));
});

app.get('/riddle/sapphire-breeze-2543', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle8.html'));
});

app.get('/riddle/jade-vine-6453', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle8.html'));
});


// Riddle 9

app.get('/riddle/maroon-horizon-7682', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle9.html'));
});

app.get('/riddle/peach-glow-1237', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle9.html'));
});

app.get('/riddle/ivory-sand-3984', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle9.html'));
});

app.get('/riddle/rose-quartz-4628', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle9.html'));
});

app.get('/riddle/pearl-drop-5423', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle9.html'));
});


// Riddle 10

app.get('/riddle/amethyst-flare-9482', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle10.html'));
});

app.get('/riddle/obsidian-void-8731', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle10.html'));
});

app.get('/riddle/topaz-fall-1542', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle10.html'));
});

app.get('/riddle/coral-reef-4983', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle10.html'));
});

app.get('/riddle/garnet-flame-7284', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle10.html'));
});


// Riddle 11

app.get('/riddle/opal-mist-6529', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle11.html'));
});

app.get('/riddle/lime-twist-3982', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle11.html'));
});

app.get('/riddle/cerulean-waves-7432', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle11.html'));
});

app.get('/riddle/sandstorm-1258', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle11.html'));
});

app.get('/riddle/dark-ember-8394', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle11.html'));
});



// Riddle 12

app.get('/riddle/smoky-mountain-2875', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle12.html'));
});

app.get('/riddle/fiery-wings-6231', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle12.html'));
});

app.get('/riddle/icy-blast-5612', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle12.html'));
});

app.get('/riddle/steel-blade-4785', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle12.html'));
});

app.get('/riddle/cobalt-moon-5632', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle12.html'));
});


// Riddle 13

app.get('/riddle/silver-wisp-3987', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/bella/riddle13.html'));
});

app.get('/riddle/olive-branch-4792', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/emery/riddle13.html'));
});

app.get('/riddle/sunset-echo-8742', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/grady/riddle13.html'));
});

app.get('/riddle/frosty-mist-2384', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/raanan/riddle13.html'));
});

app.get('/riddle/shadow-sprint-9832', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/players/PapaBREW/riddle13.html'));
});


// FinalPage

app.get('/riddle/thefinalpage', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/finalpage.html'));
});




// Use routes
app.use('/api/scores', scoreRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});