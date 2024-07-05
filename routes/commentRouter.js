const express = require('express');
const commentRouter = express.Router();
const Comment = require('../models/comment');

// Route to get all comments
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500); // Set HTTP status code to 500 (Internal Server Error)
            return next(err); // Pass the error to the next middleware
        }
        return res.status(200).send(comments); // Set HTTP status code to 200 (OK) and send the comments
    });
});

// Route to post a new comment for a specific issue
commentRouter.post('/:issueId', (req, res, next) => {
    req.body.user = req.auth._id; // Add the authenticated user's ID to the comment data
    req.body.issue = req.params.issueId; // Add the issue ID from the URL parameters to the comment data
    req.body.username = req.auth.username; // Add the authenticated user's username to the comment data
    const newComment = new Comment(req.body); // Create a new Comment instance with the provided data
    newComment.save((err, savedComment) => { // Save the new comment to the database
        if (err) {
            res.status(500); // Set HTTP status code to 500 (Internal Server Error)
            return next(err); // Pass the error to the next middleware
        }
        return res.status(201).send(savedComment); // Set HTTP status code to 201 (Created) and send the saved comment
    });
});

module.exports = commentRouter;
