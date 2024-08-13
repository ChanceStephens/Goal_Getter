const express = require('express');
const authRouter = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Route to handle user signup
authRouter.post('/signup', (req, res, next) => {
    // Convert username to lowercase and check if it already exists in the database
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500); // Set HTTP status code to 500 (Internal Server Error)
            return next(err); // Pass the error to the next middleware
        }
        if (user) {
            res.status(403); // Set HTTP status code to 403 (Forbidden)
            return next(new Error('That username is already taken')); // Pass the error to the next middleware
        }
        // Create a new user with the provided data
        const newUser = new User(req.body);
        newUser.save((err, savedUser) => { // Save the new user to the database
            if (err) {
                res.status(500); // Set HTTP status code to 500 (Internal Server Error)
                return next(err); // Pass the error to the next middleware
            }
            // Generate a JWT token for the new user
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
            // Send the token and the user data (without password) back to the client
            return res.status(201).send({ token, user: savedUser.withoutPassword() });
        });
    });
});

// Route to handle user login
authRouter.post('/login', (req, res, next) => {
    // Convert username to lowercase and find the user in the database
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500); // Set HTTP status code to 500 (Internal Server Error)
            return next(err); // Pass the error to the next middleware
        }
        if (!user) {
            res.status(403); // Set HTTP status code to 403 (Forbidden)
            return next(new Error('Username or Password is incorrect')); // Pass the error to the next middleware
        }
        // Check if the provided password matches the stored password
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err || !isMatch) {
                res.status(403); // Set HTTP status code to 403 (Forbidden)
                return next(new Error('Username or Password is incorrect')); // Pass the error to the next middleware
            }
            // Generate a JWT token for the user
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            // Send the token and the user data (without password) back to the client
            return res.status(200).send({ token, user: user.withoutPassword() });
        });
    });
});

module.exports = authRouter;
