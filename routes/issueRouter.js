const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');

// Middleware to parse incoming requests and add authentication

// Route to get all issues
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500); // Set HTTP status code to 500 (Internal Server Error)
            return next(err); // Pass the error to the next middleware
        }
        return res.status(200).send(issues); // Set HTTP status code to 200 (OK) and send the issues
    });
});

// Route to get issues by a specific user
issueRouter.get('/user', (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => { // Filter issues by the authenticated user's ID
        if (err) {
            res.status(500); // Set HTTP status code to 500 (Internal Server Error)
            return next(err); // Pass the error to the next middleware
        }
        return res.status(200).send(issues); // Set HTTP status code to 200 (OK) and send the issues
    });
});

// Route to add a new issue
issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id; // Add the authenticated user's ID to the issue data
    req.body.username = req.auth.username; // Add the authenticated user's username to the issue data
    const newIssue = new Issue(req.body); // Create a new Issue instance with the provided data
    newIssue.save((err, savedIssue) => { // Save the new issue to the database
        if (err) {
            res.status(500); // Set HTTP status code to 500 (Internal Server Error)
            return next(err); // Pass the error to the next middleware
        }
        return res.status(201).send(savedIssue); // Set HTTP status code to 201 (Created) and send the saved issue
    });
});

// Route to delete an issue by ID
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id }, // Ensure the user can only delete their own issues
        (err, deletedIssue) => {
            if (err) {
                res.status(500); // Set HTTP status code to 500 (Internal Server Error)
                return next(err); // Pass the error to the next middleware
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`); // Set HTTP status code to 200 (OK) and send a success message
        }
    );
});

// Route to update an issue by ID
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id }, // Ensure the user can only update their own issues
        req.body, // The data to update the issue with
        { new: true }, // Option to return the updated document
        (err, updatedIssue) => {
            if (err) {
                res.status(500); // Set HTTP status code to 500 (Internal Server Error)
                return next(err); // Pass the error to the next middleware
            }
            return res.status(201).send(updatedIssue); // Set HTTP status code to 201 (Created) and send the updated issue
        }
    );
});

// Route to upvote an issue
issueRouter.put('/upvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId }, // Find the issue by ID
        { 
            $addToSet: { likedUsers: req.auth._id }, // Add the authenticated user's ID to the likedUsers set if not already present
            $pull: { dislikedUsers: req.auth._id }, // Remove the authenticated user's ID from the dislikedUsers set if present
        },
        { new: true }, // Option to return the updated document
        (err, updatedIssue) => {
            if (err) {
                res.status(500); // Set HTTP status code to 500 (Internal Server Error)
                return next(err); // Pass the error to the next middleware
            }
            return res.status(201).send(updatedIssue); // Set HTTP status code to 201 (Created) and send the updated issue
        }
    );
});

// Route to downvote an issue
issueRouter.put('/downvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId }, // Find the issue by ID
        { 
            $addToSet: { dislikedUsers: req.auth._id }, // Add the authenticated user's ID to the dislikedUsers set if not already present
            $pull: { likedUsers: req.auth._id }, // Remove the authenticated user's ID from the likedUsers set if present
        },
        { new: true }, // Option to return the updated document
        (err, updatedIssue) => {
            if (err) {
                res.status(500); // Set HTTP status code to 500 (Internal Server Error)
                return next(err); // Pass the error to the next middleware
            }
            return res.status(201).send(updatedIssue); // Set HTTP status code to 201 (Created) and send the updated issue
        }
    );
});

module.exports = issueRouter;
