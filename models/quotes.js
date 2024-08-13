// const mongoose = require('mongoose');                                           //✜ MONGOOSE
// const Schema = mongoose.Schema;                                                 //✜ SCHEMA
// const quotesSchema = new Schema({                                               //✜ QUOTE SCHEMA
//     q: String,
//     a: String, 
//     c: String,
//     h: String
// })
// module.exports = mongoose.model('Quotes', quotesSchema);                        //✜ EXPORT QUOTE SCHEMA


const mongoose = require('mongoose');                                           //✜ MONGOOSE
const Schema = mongoose.Schema;                                                 //✜ SCHEMA
const quotesSchema = new Schema({                                               //✜ QUOTE SCHEMA
    q: String,
    a: String, 
    c: String,
    h: String
})
module.exports = mongoose.model('Quotes', quotesSchema);                        //✜ EXPORT QUOTE SCHEMA