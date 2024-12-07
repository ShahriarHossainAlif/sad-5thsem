const express = require('express');
const bcrypt = require('bcryptjs');  // Using bcryptjs
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Setup MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL credentials
  password: '',  // if you have a password for MySQL, put it here
  database: 'signup', // the name of your database
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});

const app = express();
const PORT = 8081;

// Middlewares
app.use(cors()); // Allow cross-origin requests (for development)
app.use(bodyParser.json()); // Parse JSON requests

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key'; // Change this to a secure secret key

// Signup API
app.post('/sign-up', async (req, res) => {
  const { username, customerName, email, phoneNumber, password } = req.body;

  // Check if the user already exists
  const queryCheck = 'SELECT * FROM users WHERE email = ?';
  db.query(queryCheck, [email], async (err, result) => {
    if (err) {
      console.error("Error checking user in database:", err);
      return res.status(500).json({ message: 'Database error' });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password using bcryptjs
    try {
      const hashedPassword = await bcrypt.hash(password, 10);  // Using async/await for bcrypt
      // Insert user data into the database
      const queryInsert = 'INSERT INTO users (username, customer_name, email, phone_number, password) VALUES (?, ?, ?, ?, ?)';
      const values = [username, customerName, email, phoneNumber, hashedPassword];

      db.query(queryInsert, values, (err, result) => {
        if (err) {
          console.error("Error inserting data into database:", err);
          return res.status(500).json({ message: 'Error inserting data into database' });
        }
        res.status(201).json({ message: 'Signup successful' });
      });
    } catch (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ message: 'Error hashing password' });
    }
  });
});

// Login API
app.post('/sign-up', (req, res) => {
    const { username, customerName, email, phoneNumber, password } = req.body;
  
    console.log("Received password:", password);  // Log password to check if it's passed
  
    // Check if all fields are present
    if (!password || !email || !username || !customerName || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    // Check if the user already exists
    const queryCheck = 'SELECT * FROM users WHERE email = ?';
    db.query(queryCheck, [email], (err, result) => {
      if (err) {
        console.error("Database error during check:", err);
        return res.status(500).json({ message: 'Database error' });
      }
      if (result.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error("Error hashing password:", err);  // Log detailed error message
          return res.status(500).json({ message: 'Error hashing password', error: err });
        }
  
        // Insert user data into the database
        const queryInsert = 'INSERT INTO users (username, customer_name, email, phone_number, password) VALUES (?, ?, ?, ?, ?)';
        const values = [username, customerName, email, phoneNumber, hashedPassword];
  
        db.query(queryInsert, values, (err, result) => {
          if (err) {
            console.error("Database error during insert:", err);
            return res.status(500).json({ message: 'Error inserting data into database' });
          }
          res.status(201).json({ message: 'Signup successful' });
        });
      });
    });
  });
  
  

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded; // Attach user info to the request
    next();
  });
};

// Get User Info API (protected route)
app.get('/user-info', authenticateJWT, (req, res) => {
  const userId = req.user.id; // Get user ID from JWT

  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Database error fetching user data:", err);
      return res.status(500).json({ message: 'Database error fetching user data' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(results[0]); // Return user info
  });
});

// Get all users API
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';  // Query to fetch all users
    db.query(query, (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: 'Database error fetching users' });
      }
      res.status(200).json(results);  // Send back user data
    });
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
