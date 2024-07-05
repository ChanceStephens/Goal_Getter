const mongoose = require('mongoose'); // Mongoose for MongoDB object modeling.
const Schema = mongoose.Schema; // Destructuring Schema from mongoose for schema definition.

// Define the comment schema
const commentSchema = new Schema({
    text: {
        type: String, // Specifies the data type as String
        required: true // Makes this field mandatory
    },
    user: {
        type: Schema.Types.ObjectId, // References another document by its ObjectId
        ref: 'User', // Specifies the reference to the 'User' collection
        required: true // Makes this field mandatory to link a comment to a user
    },
    issue: {
        type: Schema.Types.ObjectId, // References another document by its ObjectId
        ref: 'Issue', // Specifies the reference to the 'Issue' collection
        required: true // Makes this field mandatory to link a comment to an issue
    },
    username: {
        type: String, // Specifies the data type as String
        required: true // Makes this field mandatory
    },
    // Uncomment if createdAt field is needed
    // createdAt: {
    //     type: Date, // Stores the date when the comment was created
    //     default: Date.now // Automatically sets to the current date and time
    // }
});

// Export the Comment model
module.exports = mongoose.model('Comment', commentSchema); // 'Comment' is the name of the model
