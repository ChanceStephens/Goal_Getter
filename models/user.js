// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

// // Define the user schema
// const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         lowercase: true, // Convert the username to lowercase before saving
//         unique: true // Ensure the username is unique
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     memberSince: {
//         type: Date,
//         default: Date.now // Set the default value to the current date
//     }
// });

// // Pre-save hook to encrypt user password on signup
// userSchema.pre('save', function(next) {
//     const user = this;
//     // Only hash the password if it has been modified (or is new).
//     if (!user.isModified('password')) return next();
//     // Hash the password with a salt round of 10.
//     bcrypt.hash(user.password, 10, (err, hash) => {
//         if (err) return next(err); // Pass the error to the next middleware
//         user.password = hash; // Set the hashed password
//         next(); // Move to the next middleware
//     });
// });

// // Method to check encrypted password on login
// userSchema.methods.checkPassword = function(passwordAttempt, callback) {
//     bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
//         if (err) return callback(err); // Pass the error to the callback
//         return callback(null, isMatch); // Return whether the passwords match
//     });
// };

// // Method to remove user's password for token/sending the response
// userSchema.methods.withoutPassword = function() {
//     const user = this.toObject(); // Convert the document to a plain JavaScript object
//     delete user.password; // Remove the password property
//     return user; // Return the modified user object
// };

// module.exports = mongoose.model('User', userSchema); // Export the User model



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true, // Convert the username to lowercase before saving
        unique: true // Ensure the username is unique
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now // Set the default value to the current date
    }
});

// Pre-save hook to encrypt user password on signup
userSchema.pre('save', function(next) {
    const user = this;
    // Only hash the password if it has been modified (or is new).
    if (!user.isModified('password')) return next();
    // Hash the password with a salt round of 10.
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err); // Pass the error to the next middleware
        user.password = hash; // Set the hashed password
        next(); // Move to the next middleware
    });
});

// Method to check encrypted password on login
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err); // Pass the error to the callback
        return callback(null, isMatch); // Return whether the passwords match
    });
};

// Method to remove user's password for token/sending the response
userSchema.methods.withoutPassword = function() {
    const user = this.toObject(); // Convert the document to a plain JavaScript object
    delete user.password; // Remove the password property
    return user; // Return the modified user object
};

module.exports = mongoose.model('User', userSchema); // Export the User model