// const express = require('express'); // Express framework to simplify HTTP server creation.
// const morgan = require('morgan'); // Morgan middleware for logging HTTP requests.
// const mongoose = require('mongoose'); // Mongoose for MongoDB object modeling.
// require('dotenv').config(); // Dotenv for loading environment variables from a .env file.
// const { expressjwt } = require('express-jwt'); // express-jwt for JWT authentication middleware.

// const app = express(); // Initializing an Express application.
// const PORT = process.env.PORT; 

// // Middleware
// app.use(express.json()); // Parses incoming requests with JSON payloads.
// app.use(morgan('dev')); // Logs HTTP requests to the console in 'dev' format.

// // Database connection
// mongoose.set('strictQuery', false); // Disables strict query mode. May be necessary for certain query behaviors.
// mongoose.connect(process.env.MONGO_URI, (err) => {
//     if (err) {
//         console.error("Error connecting to MongoDB:", err);
//     } else {
//         console.log("Connected to MongoDB");
//     }
// });

// // Routes
// app.use('/api/auth', require('./routes/authRouter')); // Authentication routes.
// app.use('/api/main', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })); // JWT middleware for protected routes.
// app.use('/api/main/pace', require('./routes/paceSetterRouter'))
// app.use('/api/jokes', require('./routes/jokesRouter')); 
// app.use('/api/quotes', require('./routes/quotesRouter'));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err); // Logs the error object.
//     if (err.name === "UnauthorizedError") {
//         res.status(err.status).send({ errMsg: "Unauthorized access." });
//     } else {
//         res.status(500).send({ errMsg: err.message });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require('express'); // Express framework to simplify HTTP server creation.
const morgan = require('morgan'); // Morgan middleware for logging HTTP requests.
const mongoose = require('mongoose'); // Mongoose for MongoDB object modeling.
require('dotenv').config(); // Dotenv for loading environment variables from a .env file.
const { expressjwt } = require('express-jwt'); // express-jwt for JWT authentication middleware.
const path = require('path');

const app = express(); // Initializing an Express application.
const PORT = process.env.PORT; 

// Middleware
app.use(express.json()); // Parses incoming requests with JSON payloads.
app.use(morgan('dev')); // Logs HTTP requests to the console in 'dev' format.


app.use(express.static(path.join(__dirname, 'client', 'dist'))); 

// Database connection
mongoose.set('strictQuery', false); // Disables strict query mode. May be necessary for certain query behaviors.
mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.error("Error connecting to MongoDB:", err);
    } else {
        console.log("Connected to MongoDB");
    }
});

// Routes
app.use('/api/auth', require('./routes/authRouter')); // Authentication routes.
app.use('/api/main', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })); // JWT middleware for protected routes.
app.use('/api/main/pace', require('./routes/paceSetterRouter'))
app.use('/api/jokes', require('./routes/jokesRouter')); 
app.use('/api/quotes', require('./routes/quotesRouter'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Logs the error object.
    if (err.name === "UnauthorizedError") {
        res.status(err.status).send({ errMsg: "Unauthorized access." });
    } else {
        res.status(500).send({ errMsg: err.message });
    }
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html')));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});