// const express = require('express');                                             //✜ EXPRESS
// const quotesRouter = express.Router();                                          //✜ QUOTES ROUTER
// const Quotes = require('../models/quotes');                                     //✜ QUOTES SCHEMA

// quotesRouter.get('/', async (req, res, next) => {                               //✜ GET QUOTES
//     try {
//         const quotes = await Quotes.find()                                      //✜ FIND QUOTES
//         return res.status(200).send(quotes)                                     //✜ SEND QUOTES
//     } catch (err) {
//         res.status(500)                                                         //✜ INTERNAL SERVER ERROR
//         return next(err)                                                        //✜ NEXT ERROR
//     }
// })
// module.exports = quotesRouter;                                                  //✜ EXPORT QUOTES ROUTER

const express = require('express');                                             //✜ EXPRESS
const quotesRouter = express.Router();                                          //✜ QUOTES ROUTER
const Quotes = require('../models/quotes');                                     //✜ QUOTES SCHEMA
quotesRouter.get('/', async (req, res, next) => {                               //✜ GET QUOTES
    try {
        const quotes = await Quotes.find()                                      //✜ FIND QUOTES
        return res.status(200).send(quotes)                                     //✜ SEND QUOTES
    } catch (err) {
        res.status(500)                                                         //✜ INTERNAL SERVER ERROR
        return next(err)                                                        //✜ NEXT ERROR
    }
})
module.exports = quotesRouter;                                                  //✜ EXPORT QUOTES ROUTER