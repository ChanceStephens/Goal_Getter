// const express = require('express');                                             //✜ EXPRESS 
// const jokesRouter = express.Router()                                            //✜ EXPRESS ROUTER
// const Jokes = require('../models/jokes');                                       //✜ JOKES SCHEMA
// jokesRouter.get('/', async (req, res, next) => {                                //✜ GET JOKES
//     try {
//         const jokes = await Jokes.find()                                        //✜ FIND JOKES
//         return res.status(200).send(jokes)                                      //✜ SEND JOKES
//     } catch (err) {
//         res.status(500)                                                         //✜ INTERNAL SERVER ERROR
//         return next(err)                                                        //✜ NEXT ERROR
//     }
// })
// module.exports = jokesRouter;                                                    //✜ EXPORT JOKES ROUTER

const express = require('express');                                             //✜ EXPRESS 
const jokesRouter = express.Router()                                            //✜ EXPRESS ROUTER
const Jokes = require('../models/jokes');                                       //✜ JOKES SCHEMA
jokesRouter.get('/', async (req, res, next) => {                                //✜ GET JOKES
    try {
        const jokes = await Jokes.find()                                        //✜ FIND JOKES
        return res.status(200).send(jokes)                                      //✜ SEND JOKES
    } catch (err) {
        res.status(500)                                                         //✜ INTERNAL SERVER ERROR
        return next(err)                                                        //✜ NEXT ERROR
    }
})
module.exports = jokesRouter;                                                    //✜ EXPORT JOKES ROUTER