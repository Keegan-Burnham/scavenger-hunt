const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Qn24O!POQ22JlS&ut&ANzn!xhy*ZmS', // replace with your MySQL password
  database: 'scavenger_hunt'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

module.exports = db;
