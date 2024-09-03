const express = require('express');
const router = express.Router();
const db = require('../db');

// Get scores for all teams
router.get('/', (req, res) => {
  db.query('SELECT * FROM teams ORDER BY score DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to retrieve scores.' });
    } else {
      res.json(results);
    }
  });
});

// Update team score (to be called when a team completes a riddle)
router.post('/update', (req, res) => {
  const { teamId, points } = req.body;
  db.query('UPDATE teams SET score = score + ? WHERE id = ?', [points, teamId], (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to update score.' });
    } else {
      res.json({ message: 'Score updated successfully.' });
    }
  });
});

module.exports = router;
