const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test} = require('../controllers/authController')

// Middleware to handle Cross-Origin Resource Sharing (CORS)
router.use(
  cors({
    credentials: true,  // Include credentials (e.g., cookies) in the CORS request
    origin: 'http://localhost:5173'  // Allow requests from this origin
  })
);

// Define a route for the root endpoint, test is in authController.js
router.get('/', test);

// Export the router for use in other files
module.exports = router;
