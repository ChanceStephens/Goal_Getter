const mongoose = require('mongoose'); // Mongoose for MongoDB object modeling.
const Schema = mongoose.Schema; // Destructuring Schema from mongoose for schema definition.

// Define the issue schema
const issueSchema = new Schema({
  title: {
    type: String, // Specifies the data type as String
    required: true // Makes this field mandatory
  },
  description: {
    type: String // Optional field for additional details, not required
  },
  imgUrl: {
    type: String // Optional field for an image URL
  },
  user: {
    type: Schema.Types.ObjectId, // References another document by its ObjectId
    ref: 'User', // Specifies the reference to the 'User' collection
    required: true // Makes this field mandatory to link an issue to a user
  },
  username: {
    type: String // Optional field to store the username directly for easier access
  },
  createdAt: {
    type: Date, // Stores the date when the issue was created
    default: Date.now // Automatically sets to the current date and time
  },
  likedUsers: [{
    type: Schema.Types.ObjectId, // References another document by its ObjectId
    ref: "User" // Specifies the reference to the 'User' collection
  }],
  dislikedUsers: [{
    type: Schema.Types.ObjectId, // References another document by its ObjectId
    ref: "User" // Specifies the reference to the 'User' collection
  }]
});

// Export the Issue model
module.exports = mongoose.model('Issue', issueSchema); // 'Issue' is the name of the model
