const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userNavigation = require('../controllers/navigationController');
const briefController = require('../controllers/briefController');

// Route for user registration
router.post('/register', userController.registerUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route for user navigation
router.post('/navigation', userNavigation.loadUserPaths);

// Route for brief creation
router.post('/createBrief', briefController.createBrief);

module.exports = router;