const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Correctly import your functions
const router = express.Router();

// Ensure that the handler functions are passed correctly
console.log(registerUser);
router.post('/register', registerUser); // Pass registerUser as a function
router.post('/login', loginUser); // Pass loginUser as a function

module.exports = router;
